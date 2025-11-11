import { ERROR_MESSAGES } from "../constants/errorMessages.js";

export function validateAndConvert(values) {
  return values.map((value) => {
    const trimmed = value.trim();
    const num = Number(trimmed);

    if (num < 0) {
      throw new Error(ERROR_MESSAGES.NEGATIVE_NUMBER);
    }

    if (!/^\d+$/.test(trimmed)) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
    }

    return num;
  });
}
