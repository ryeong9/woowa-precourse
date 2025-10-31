import {
  BONUS_ERROR_MESSAGE,
  COMMON_ERROR_MESSAGES,
  LOTTO_ERROR_MESSAGES,
  PURCHASE_ERROR_MESSAGE,
} from '../../src/constants/errorMessages.js';
import {
  validateBonusNumber,
  validatePurchaseAmount,
  validateWinningNumbers,
} from '../../src/utils/validator.js';

describe('구매 금액 검증', () => {
  test.each([{ amount: 1000 }, { amount: 5000 }, { amount: 100000 }])(
    '구매 금액 정상: $amount원',
    ({ amount }) => {
      expect(() => validatePurchaseAmount(amount)).not.toThrow();
    },
  );

  test.each([1500, 2500, 123456])('1,000원 단위가 아니면 예외 처리: %d', (amount) => {
    expect(() => validatePurchaseAmount(amount)).toThrow(PURCHASE_ERROR_MESSAGE.NOT_THOUSAND_UNIT);
  });
  test.each([0, -1000])('0 이하(%d)면 예외 처리', (amount) => {
    expect(() => validatePurchaseAmount(amount)).toThrow(
      COMMON_ERROR_MESSAGES.INVALID_NEGATIVE_OR_ZERO,
    );
  });
  test('정수가 아닐 경우 예외 처리', () => {
    expect(() => validatePurchaseAmount(1.5)).toThrow(COMMON_ERROR_MESSAGES.NOT_INTEGER);
  });
});

describe('당첨 번호 검증', () => {
  test.each([{ numbers: [1, 2, 3, 4, 5, 6] }, { numbers: [7, 11, 16, 35, 36, 44] }])(
    '당첨 번호 정상: $numbers',
    ({ numbers }) => {
      expect(() => validateWinningNumbers(numbers)).not.toThrow();
    },
  );

  test.each([
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5, 6, 7],
  ])('번호가 6개가 아니면 예외 처리: %p', (...numbers) => {
    expect(() => validateWinningNumbers(numbers)).toThrow(LOTTO_ERROR_MESSAGES.INVALID_LENGTH);
  });
  test('번호 중복이면 예외 처리', () => {
    expect(() => validateWinningNumbers([1, 1, 3, 4, 5, 6])).toThrow(
      LOTTO_ERROR_MESSAGES.DUPLICATED,
    );
  });
  test('범위를 벗어나면 예외 처리', () => {
    expect(() => validateWinningNumbers([1, 2, 3, 4, 5, 46])).toThrow(
      LOTTO_ERROR_MESSAGES.OUT_OF_RANGE,
    );
  });
  test('정수가 아니면 예외 처리', () => {
    expect(() => validateWinningNumbers([1, 2, 3, 4, 5, 6.5])).toThrow(
      COMMON_ERROR_MESSAGES.NOT_INTEGER,
    );
  });
  test('0 이하면 예외 처리', () => {
    expect(() => validateWinningNumbers([1, 2, 3, 4, 5, -1])).toThrow(
      COMMON_ERROR_MESSAGES.INVALID_NEGATIVE_OR_ZERO,
    );
  });
});

describe('보너스 번호 검증', () => {
  const winning = [1, 2, 3, 4, 5, 6];

  test.each([
    { bonus: 7, winning },
    { bonus: 10, winning },
    { bonus: 45, winning },
  ])('보너스 번호 정상: $bonus (당첨번호와 중복X)', ({ bonus }) => {
    expect(() => validateBonusNumber(bonus, winning)).not.toThrow();
  });

  test('정수가 아닐 경우 예외 처리', () => {
    expect(() => validateBonusNumber(7.5, winning)).toThrow(COMMON_ERROR_MESSAGES.NOT_INTEGER);
  });
  test.each([0, -7])('0 이하(%d)는 예외 처리', (bonus) => {
    expect(() => validateBonusNumber(bonus, winning)).toThrow(
      COMMON_ERROR_MESSAGES.INVALID_NEGATIVE_OR_ZERO,
    );
  });
  test('범위 벗어나면 예외 처리', () => {
    expect(() => validateBonusNumber(48, winning)).toThrow(LOTTO_ERROR_MESSAGES.OUT_OF_RANGE);
  });
  test('당첨번호와 중복이면 에러', () => {
    expect(() => validateBonusNumber(6, winning)).toThrow(
      BONUS_ERROR_MESSAGE.DUPLICATED_WITH_WINNING,
    );
  });
});
