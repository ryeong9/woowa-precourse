import {
  BONUS_ERROR_MESSAGE,
  COMMON_ERROR_MESSAGES,
  LOTTO_ERROR_MESSAGES,
  PURCHASE_ERROR_MESSAGE,
} from '../constants/errorMessages.js';
import { LOTTO } from '../constants/rules.js';

const validateInteger = function validateInteger(number) {
  if (!Number.isInteger(number)) {
    throw new Error(COMMON_ERROR_MESSAGES.NOT_INTEGER);
  }
};

const validatePositive = function validatePositive(number) {
  if (number <= 0) {
    throw new Error(COMMON_ERROR_MESSAGES.INVALID_NEGATIVE_OR_ZERO);
  }
};

const validateNumberInRange = function validateNumberInRange(number, min, max) {
  if (number < min || number > max) {
    throw new Error(LOTTO_ERROR_MESSAGES.OUT_OF_RANGE);
  }
};

const validatePurchaseAmount = function validatePurchaseAmount(number) {
  validateInteger(number);
  validatePositive(number);

  if (number % LOTTO.PRICE !== 0) {
    throw new Error(PURCHASE_ERROR_MESSAGE.NOT_THOUSAND_UNIT);
  }
};

const validateLottoNumbers = function validateLottoNumbers(winningNumbers) {
  if (winningNumbers.length !== LOTTO.COUNT) {
    throw new Error(LOTTO_ERROR_MESSAGES.INVALID_LENGTH);
  }

  if (new Set(winningNumbers).size !== winningNumbers.length) {
    throw new Error(LOTTO_ERROR_MESSAGES.DUPLICATED);
  }

  winningNumbers.forEach((number) => {
    validateInteger(number);
    validatePositive(number);
    validateNumberInRange(number, LOTTO.MIN, LOTTO.MAX);
  });
};

const validateBonusNumber = function validateBonusNumber(bonusNumber, winningNumbers) {
  validateInteger(bonusNumber);
  validatePositive(bonusNumber);
  validateNumberInRange(bonusNumber, LOTTO.MIN, LOTTO.MAX);

  if (winningNumbers.includes(bonusNumber)) {
    throw new Error(BONUS_ERROR_MESSAGE.DUPLICATED_WITH_WINNING);
  }
};

export { validatePurchaseAmount, validateLottoNumbers, validateBonusNumber };
