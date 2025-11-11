import { COMMON_ERROR_MESSAGES, LOTTO_ERROR_MESSAGES } from '../constants/errorMessages.js';

const requireNonEmpty = function requireNonEmpty(rawInput) {
  if (!rawInput.trim()) {
    throw new Error(COMMON_ERROR_MESSAGES.EMPTY_INPUT);
  }
  return rawInput.trim();
};

const requireOnlyNumber = function requireOnlyNumber(input) {
  const value = Number(input);
  if (!Number.isFinite(value)) {
    throw new Error(COMMON_ERROR_MESSAGES.NOT_A_NUMBER);
  }
  return value;
};

const parsePurchaseInput = function parsePurchaseInput(rawInput) {
  const trimmedInput = requireNonEmpty(rawInput);
  return requireOnlyNumber(trimmedInput);
};

const parseWinningNumberInput = function parseWinningNumberInput(rawInput) {
  const trimmedInput = requireNonEmpty(rawInput);

  if (/(?<=\d)\s*([^\d\s,])\s*(?=\d)/gu.test(trimmedInput)) {
    throw new Error(LOTTO_ERROR_MESSAGES.INVALID_DELIMITER);
  }

  const tokens = trimmedInput.split(',').map((token) => token.trim());

  if (tokens.some((token) => token === '')) {
    throw new Error(LOTTO_ERROR_MESSAGES.INVALID_FORMAT);
  }

  return tokens.map((token) => requireOnlyNumber(token));
};

const parseBonusNumberInput = function parseBonusNumberInput(rawInput) {
  const trimmedInput = requireNonEmpty(rawInput);
  return requireOnlyNumber(trimmedInput);
};

export { parsePurchaseInput, parseWinningNumberInput, parseBonusNumberInput };
