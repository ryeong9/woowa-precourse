import { ERROR_MESSAGES } from '../constants/errorMessages.js';

export default function parseInput(input) {
  if (!input || String(input).trim().length === 0) {
    throw new Error(ERROR_MESSAGES.INVALID_EMPTY);
  }

  const names = input.split(',').map((name) => name.trim());

  if (names.some((name) => name === '')) {
    throw new Error(ERROR_MESSAGES.INVALID_SPACE);
  }

  if (names.length === 1 && /[;|/]/.test(input)) {
    throw new Error(ERROR_MESSAGES.INVALID_OTHER_DELIMITER);
  }


  return names;
}