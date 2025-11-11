import { COMMON_ERROR_MESSAGES, LOTTO_ERROR_MESSAGES } from '../../src/constants/errorMessages.js';
import {
  parseBonusNumberInput,
  parsePurchaseInput,
  parseWinningNumberInput,
} from '../../src/utils/parser.js';

describe('구매 금액 문자열 파싱', () => {
  test.each([
    { input: '6000', expected: 6000 },
    { input: '001000', expected: 1000 },
  ])('정상 입력 "$input" → $expected', ({ input, expected }) => {
    expect(parsePurchaseInput(input)).toBe(expected);
  });

  test('입력값이 빈 문자열일 경우 예외 처리한다.', () => {
    expect(() => parsePurchaseInput('')).toThrow(COMMON_ERROR_MESSAGES.EMPTY_INPUT);
  });
  test('숫자가 아닌 값이 포함된 경우 예외 처리한다.', () => {
    expect(() => parsePurchaseInput('abc')).toThrow(COMMON_ERROR_MESSAGES.NOT_A_NUMBER);
  });
});

describe('당첨 번호 문자열 파싱', () => {
  test.each([
    { input: '1,2,3,4,5,6', expected: [1, 2, 3, 4, 5, 6] },
    { input: '1, 2 ,3,4, 5,6', expected: [1, 2, 3, 4, 5, 6] },
  ])('정상 입력 "$input" → $expected', ({ input, expected }) => {
    expect(parseWinningNumberInput(input)).toEqual(expected);
  });

  test.each(['1|2|3|4|5|6', '1;2;3;4;5;6', '1:2:3:4:5:6', '1/2/3/4/5/6'])(
    '쉼표 아닌 구분자: "%s"',
    (input) => {
      expect(() => parseWinningNumberInput(input)).toThrow(LOTTO_ERROR_MESSAGES.INVALID_DELIMITER);
    },
  );
  test.each(['1,,3,4,5,6', ',2,3,4,5,6', '1,2,3,4,5,'])('형식 오류: "%s"', (input) => {
    expect(() => parseWinningNumberInput(input)).toThrow(LOTTO_ERROR_MESSAGES.INVALID_FORMAT);
  });
  test('입력값이 빈 문자열일 경우 예외 처리한다.', () => {
    expect(() => parseWinningNumberInput('')).toThrow(COMMON_ERROR_MESSAGES.EMPTY_INPUT);
  });
  test('숫자가 아닌 값이 포함된 경우 예외 처리한다.', () => {
    expect(() => parseWinningNumberInput('1,2,3,a,5,6')).toThrow(
      COMMON_ERROR_MESSAGES.NOT_A_NUMBER,
    );
  });
});

describe('보너스 번호 문자열 파싱', () => {
  test.each([
    { input: '43', expected: 43 },
    { input: '7', expected: 7 },
  ])('정상 입력: "$input" → $expected', ({ input, expected }) => {
    expect(parseBonusNumberInput(input)).toBe(expected);
  });

  test('입력값이 빈 문자열일 경우 예외 처리한다.', () => {
    expect(() => parseBonusNumberInput('')).toThrow(COMMON_ERROR_MESSAGES.EMPTY_INPUT);
  });
  test('숫자가 아닌 값이 포함된 경우 예외 처리한다.', () => {
    expect(() => parseBonusNumberInput('abc')).toThrow(COMMON_ERROR_MESSAGES.NOT_A_NUMBER);
  });
});
