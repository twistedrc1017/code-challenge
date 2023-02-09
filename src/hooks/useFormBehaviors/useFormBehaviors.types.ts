import { ChangeEvent, FormEvent } from "react";
import { ChangeEventType, ChangeFunctionType } from "../../common.types";

export type UseFormBehaviors_ErrorMessageType = string | string[] | boolean;

export type UseFormBehaviors_ValidationFnType<TState> = (
  value: TState[keyof TState],
  allValues: TState,
  third?: UseFormBehaviors_ErrorMessageType
) => UseFormBehaviors_ErrorMessageType;

export type UseFormBehaviors_ValidationOptionsType<TState extends {}> = {
  [key in keyof TState]?: UseFormBehaviors_ValidationFnType<TState>;
};

export type UseFormBehaviors_SubmitFnType<TState> = (
  e: FormEvent<HTMLFormElement>,
  values?: TState
) => Promise<unknown | void> | void;

export type FormBehaviorsType = "EDIT" | "CREATE";

export type UseFormBehaviors_Options<TState extends {}> = {
  type?: FormBehaviorsType;
  validations?: UseFormBehaviors_ValidationOptionsType<TState>;
  onSubmit?: (formValues: TState) => any;
  initialState: TState;
  isDirtyCheckEnabled?: boolean;
};

export interface UseFormBehaviorsOnChangeEventTargetType {
  value?: string | string[] | number | number[] | boolean | File;
  name: string;
  checked?: boolean;
  isSelected?: boolean;
  label?: string;
}

export interface UseFormBehaviorsEventType
  extends Partial<
    Omit<
      ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
      "target"
    >
  > {
  target: UseFormBehaviorsOnChangeEventTargetType;
}

export type UseFormBehaviorsOnChangeFnType = (
  event: UseFormBehaviorsEventType | UseFormBehaviorsEventType[]
) => void;

export type UseFormBehaviors<TState extends {}, APIErrors = unknown> = {
  apiErrors: APIErrors | null;
  fieldErrors: { [key in keyof TState]: UseFormBehaviors_ErrorMessageType };
  isDisabled: boolean;
  isSubmitting: boolean;
  onChange: UseFormBehaviorsOnChangeFnType;
  onSubmit: UseFormBehaviors_SubmitFnType<TState>;
  onReset: (values?: TState) => void;
  onApiErrorsReset: () => void;
  values: TState;
  hasFieldErrors: boolean;
  hasApiErrors: boolean;
  hasErrors: boolean;
};

export const isChangeEventType: ChangeFunctionType = (
  event: any
): event is ChangeEventType => {
  if (
    typeof event !== "undefined" &&
    typeof event.target !== "undefined" &&
    typeof event.target.name !== "undefined" &&
    typeof event.target.value !== "undefined"
  )
    return true;
  return false;
};

export type UseFormBehaviors_HandleValidationsFnType<TState extends {}> = (
  forceValidations: boolean
) => UseFormBehaviors<TState>["fieldErrors"];
