import { unwrapResult } from "@reduxjs/toolkit";
import {
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { unstable_batchedUpdates } from "react-dom";
import { isArray, isChangeEventType, isString } from "../../common.types";
import { deepEquals } from "../../utils/deepEquals";
import { USEFORMBEHAVIORS_VALIDATION_TIMEOUT } from "./useFormBehaviors.constants";
import {
  UseFormBehaviors,
  UseFormBehaviorsOnChangeFnType,
  UseFormBehaviors_ErrorMessageType,
  UseFormBehaviors_HandleValidationsFnType,
  UseFormBehaviors_Options,
  UseFormBehaviors_ValidationFnType,
} from "./useFormBehaviors.types";
import { checkForError, getInitFieldErrState } from "./useFormBehaviors.utils";

/**
 * BookJane's Form Handler Abstraction
 * @authors [David Zahiri](https://github.com/twistedrc1017)
 */

export function useFormBehaviors<TState extends {}, TApiErrors = undefined>(
  options: UseFormBehaviors_Options<TState>
): UseFormBehaviors<TState, TApiErrors> {
  const {
    onSubmit,
    validations = {},
    isDirtyCheckEnabled = false,
    type = "CREATE",
  } = options as UseFormBehaviors_Options<TState>;

  /* --------------------------------------------------------------------------- */
  /*                                    STATE                                    */
  /* --------------------------------------------------------------------------- */

  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const [values, setValues] = useState<TState>(options.initialState);
  const [fieldErrors, setFieldErrors] = useState<
    UseFormBehaviors<TState>["fieldErrors"]
  >(getInitFieldErrState(options.initialState));
  const [apiErrors, setApiErrors] =
    useState<UseFormBehaviors<TState, TApiErrors>["apiErrors"]>(null);
  const [disabled, setDisabled] =
    useState<UseFormBehaviors<TState>["isDisabled"]>(false);

  /* --------------------------------------------------------------------------- */
  /*                                 MUTABLE REFS                                */
  /* --------------------------------------------------------------------------- */

  const debounceRef = useRef<number | null>(null);
  const mountedRef = useRef<boolean>(false);
  const valuesRef = useRef<TState>(values);
  const dirtyFieldsRef = useRef<{ [key in keyof TState]?: true }>({});
  const initialStateRef = useRef<TState>(options.initialState);

  /* --------------------------------------------------------------------------- */
  /*                            COMPOSITE HELPER VARS                            */
  /* --------------------------------------------------------------------------- */

  const hasValidations = useMemo(
    () => Object.keys(validations).length > 0,
    [validations]
  );
  const hasFieldErrors = useMemo(() => {
    const fieldErrorValues: UseFormBehaviors_ErrorMessageType[] =
      Object.values(fieldErrors);
    return fieldErrorValues.some(checkForError);
  }, [fieldErrors]);
  const hasApiErrors = useMemo(() => !!apiErrors, [apiErrors]);
  const hasErrors = useMemo(
    () => hasFieldErrors || hasApiErrors,
    [hasApiErrors, hasFieldErrors]
  );
  const isDisabled = useMemo(() => {
    const hasDirtyFields = Object.keys(dirtyFieldsRef.current).length > 0;
    switch (type) {
      // Use deep-equals to prevent submit if user has not changed the old form data
      case "EDIT": {
        if (deepEquals(initialStateRef.current, values)) return true;
        if (isDirtyCheckEnabled)
          return !hasDirtyFields || hasFieldErrors || disabled;
        return hasFieldErrors || disabled;
      }
      case "CREATE": {
        if (isDirtyCheckEnabled)
          if (!hasDirtyFields || hasFieldErrors || disabled) return true;
        return hasFieldErrors || disabled;
      }
    }
  }, [disabled, hasFieldErrors, isDirtyCheckEnabled, type, values]);

  /* --------------------------------------------------------------------------- */
  /*                            EVENT HANDLER METHODS                            */
  /* --------------------------------------------------------------------------- */

  const applyValidations = useCallback(
    (
      fn: UseFormBehaviors_ValidationFnType<TState>,
      key: keyof TState,
      __fieldErrors__: UseFormBehaviors<TState>["fieldErrors"]
    ) => {
      const result = fn(valuesRef.current[key], valuesRef.current);

      if (isArray(result) && result.length === 0) return;

      if (isString(result) && result === "") return;

      __fieldErrors__[key] = result;
    },
    []
  );

  const handleValidations: UseFormBehaviors_HandleValidationsFnType<TState> =
    useCallback(
      (forceValidations) => {
        const __fieldErrors__ = getInitFieldErrState(initialStateRef.current);
        if (hasValidations) {
          const entries = Object.entries(validations);
          entries.forEach(([__key__, fn]) => {
            const func = fn as UseFormBehaviors_ValidationFnType<TState>;
            const key = __key__ as keyof TState;
            if (forceValidations) applyValidations(func, key, __fieldErrors__);
            else {
              if (isDirtyCheckEnabled && dirtyFieldsRef.current[key])
                applyValidations(func, key, __fieldErrors__);

              if (!isDirtyCheckEnabled)
                applyValidations(func, key, __fieldErrors__);
            }
          });
        }
        if (mountedRef.current)
          unstable_batchedUpdates(() => {
            setFieldErrors(__fieldErrors__);
            setDisabled(false);
            setSubmitting(false);
          });
        return __fieldErrors__;
      },
      [hasValidations, validations, applyValidations, isDirtyCheckEnabled]
    );

  const handleChange: UseFormBehaviorsOnChangeFnType = useCallback(
    (event) => {
      let __values__: { [K in keyof TState]?: TState[keyof TState] } = {};
      if (mountedRef.current) setDisabled(true);

      if (isArray(event)) {
        __values__ = { ...values };

        event.forEach((event) => {
          const name = event.target.name as unknown as keyof TState;
          __values__[name] = event.target
            .value as unknown as TState[keyof TState];
          if (!dirtyFieldsRef.current[name])
            dirtyFieldsRef.current[name] = true;
        });
      }
      if (!isArray(event) && isChangeEventType(event)) {
        const name = event.target.name as unknown as keyof TState;
        __values__ = { ...values, [name]: event.target.value };
        if (!dirtyFieldsRef.current[name]) dirtyFieldsRef.current[name] = true;
      }
      if (mountedRef.current) setValues(__values__ as SetStateAction<TState>);
      if (mountedRef.current)
        setFieldErrors(getInitFieldErrState(initialStateRef.current));

      if (debounceRef.current) window.clearTimeout(debounceRef.current);
      const timeout_id = window.setTimeout(() => {
        // We set the force value to false here
        // because we don't want to bypass the dirtyFieldCheck condition
        if (mountedRef.current) handleValidations(false);
      }, USEFORMBEHAVIORS_VALIDATION_TIMEOUT);
      debounceRef.current = timeout_id;
    },
    [handleValidations, values]
  );

  const handleSubmit: UseFormBehaviors<TState>["onSubmit"] = useCallback(
    async (event) => {
      event.preventDefault();

      if (!onSubmit) return void 0;
      // We set the force value to true here because we want to
      // force all validations to run regardless of any arguments passed in
      // and make sure there are none before we attempt to submit
      const fieldErrorValues: UseFormBehaviors_ErrorMessageType[] =
        Object.values(fieldErrors);
      const __hasErrors__: boolean = fieldErrorValues.some(checkForError);

      if (!__hasErrors__) {
        if (mountedRef.current)
          unstable_batchedUpdates(() => {
            setApiErrors(null);
            setSubmitting(true);
            setDisabled(true);
          });

        try {
          const result = await onSubmit(valuesRef.current);
          if (mountedRef.current)
            unstable_batchedUpdates(() => {
              setSubmitting(false);
              setDisabled(false);
            });
          return unwrapResult(result);
        } catch (err) {
          if (mountedRef.current)
            unstable_batchedUpdates(() => {
              setSubmitting(false);
              setDisabled(false);
              setApiErrors(err as SetStateAction<TApiErrors | null>);
            });
        }
      }
    },
    [fieldErrors, onSubmit]
  );

  const handleReset = useCallback(
    (resetValue = options.initialState) => {
      setValues(resetValue);
      setFieldErrors(getInitFieldErrState(initialStateRef.current));
      dirtyFieldsRef.current = {};
    },
    [options.initialState]
  );

  const onApiErrorsReset = useCallback(() => setApiErrors(null), []);

  /* --------------------------------------------------------------------------- */
  /*                                 SIDE EFFECTS                                */
  /* --------------------------------------------------------------------------- */

  useEffect(() => {
    if (mountedRef.current) valuesRef.current = values;
  }, [values]);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
    };
  }, []);

  return {
    hasFieldErrors,
    hasApiErrors,
    hasErrors,
    apiErrors,
    fieldErrors,
    isDisabled,
    isSubmitting,
    onChange: handleChange,
    onReset: handleReset,
    onApiErrorsReset,
    onSubmit: handleSubmit,
    values,
  };
}
