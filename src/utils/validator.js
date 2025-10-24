import { ERROR_MESSAGES } from '../constants/errorMessages.js';

export function validateCarNames(names) {

  if (names.some(name => name.length > 5)) {
    throw new Error(ERROR_MESSAGES.INVALID_LENGTH);
  }

  if (new Set(names).size !== names.length) {
    throw new Error(ERROR_MESSAGES.INVALID_DUPLICATION);
  }
}