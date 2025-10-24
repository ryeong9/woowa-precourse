import { ERROR_MESSAGES } from '../constants/errorMessages.js';

export function validateCarNames(names) {

  if (names.some(name => name.length > 5)) {
    throw new Error(ERROR_MESSAGES.INVALID_LENGTH);
  }

  if (new Set(names).size !== names.length) {
    throw new Error(ERROR_MESSAGES.INVALID_DUPLICATION);
  }
}


export function validateTryCount(input) {
  const trimmed = input.trim();

  if (trimmed.length === 0) {
    throw new Error(ERROR_MESSAGES.INVALID_TRY_COUNT);
  }

  const count = Number(trimmed);

  if (!Number.isInteger(count)) {
    throw new Error(ERROR_MESSAGES.INVALID_TRY_COUNT);
  }

  if (count <= 0) {
    throw new Error(ERROR_MESSAGES.INVALID_TRY_COUNT);
  }

  return count;
}