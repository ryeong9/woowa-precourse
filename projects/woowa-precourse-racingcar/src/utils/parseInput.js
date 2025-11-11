import ERROR_MESSAGES from '../constants/errorMessages.js';

const parseInput = function parseInput(input) {
  if (!input || input.trim().length === 0) {
    throw new Error(ERROR_MESSAGES.INVALID_EMPTY);
  }

  const names = input.split(',').map((name) => name.trim());

  if (names.some((name) => name === '')) {
    throw new Error(ERROR_MESSAGES.INVALID_SPACE);
  }

  return names;
};

export default parseInput;
