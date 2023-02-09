import { isArray, isBoolean, isString } from "../../common.types";
import {
  UseFormBehaviors_ErrorMessageType,
  UseFormBehaviors_Options,
} from "./useFormBehaviors.types";

export function getInitFieldErrState<TState extends {}>(
  initialState: UseFormBehaviors_Options<TState>["initialState"]
): { [key in keyof TState]: false } {
  const keys = Object.keys(initialState);

  const initialValue = keys.reduce((acc, key) => {
    return { ...acc, [key]: false };
  }, {} as { [key in keyof TState]: false });

  return initialValue;
}

export const checkForError = (
  fieldError: UseFormBehaviors_ErrorMessageType
) => {
  if (isArray(fieldError)) return fieldError.length > 0;
  if (isArray(fieldError) && fieldError.length === 1) return !!fieldError[0];
  if (isString(fieldError)) return !!fieldError;
  if (isBoolean(fieldError)) return !!fieldError;
  return !!fieldError;
};
