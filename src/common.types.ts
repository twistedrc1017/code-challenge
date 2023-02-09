export type FormValidationErrorMessageType = string | string[] | boolean;

export type ChangeFunctionType = (
  event: ChangeEventType | ChangeEventType[],
  opts?: any | undefined
) => void;

export function isChangeEventType(
  event: ChangeEventType
): event is ChangeEventType {
  if (
    typeof event !== "undefined" &&
    typeof event.target !== "undefined" &&
    typeof event.target.name !== "undefined" &&
    typeof event.target.value !== "undefined"
  )
    return true;
  return false;
}

export type ChangeEventType = {
  target: EventTarget;
  [key: string]: any;
} & Record<string, any> &
  any;

export type EventTarget = {
  name: any;
  value: any;
  label?: string;
  checked?: boolean;
  dataset?: Record<string, any>;
  [key: string]: any;
} & Record<string, any> &
  any;

export function isArray(value?: any): value is any[] {
  return Array.isArray(value);
}

export function isNumber(arg: unknown): arg is number {
  return typeof arg === "number" && Number.isInteger(arg);
}

export function isString(value?: any): value is string {
  return typeof value === "string";
}

export function isBoolean(value?: any): value is boolean {
  return typeof value === "boolean";
}

export function isFormValidationErrorDisplayed(
  error?: FormValidationErrorMessageType
) {
  if (isArray(error) && error.length === 0) return false;
  if (
    isArray(error) &&
    error.length >= 1 &&
    error.every((msg) => isString(msg) && msg !== "")
  )
    return true;

  if (isBoolean(error)) return error;

  if (isString(error) && error !== "") return true;
  if (isString(error) && error === "") return false;

  return false;
}
