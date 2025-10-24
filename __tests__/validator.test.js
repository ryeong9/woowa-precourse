import { validateCarNames, validateTryCount } from '../src/utils/validator.js';

describe('자동차 이름 검증', () => {
  let input;

  beforeEach(() => {
    input = [];
  });

  test('자동차 이름이 유효할 경우 예외가 발생하지 않는다', () => {
    input = ['pobi', 'woni', 'jun'];
    expect(() => validateCarNames(input)).not.toThrow();
  });

  test('자동차 이름이 5자를 초과하면 예외 발생', () => {
    input = ['pobi', 'junwoo'];
    expect(() => validateCarNames(input)).toThrow('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
  });

  test('자동차 이름이 중복이면 예외 발생', () => {
    input = ['pobi', 'jun', 'pobi'];
    expect(() => validateCarNames(input)).toThrow('[ERROR] 자동차 이름은 중복될 수 없습니다.');
  });
});


describe('시도 횟수 파싱 및 검증', () => {
  test('정상 문자열은 숫자로 변환한다', () => {
    expect(validateTryCount('5')).toBe(5);
  });

  test('양의 정수 예외 발생', () => {
    expect(() => validateTryCount('abc')).toThrow('[ERROR] 시도 횟수는 양의 정수여야 합니다.');
    expect(() => validateTryCount('1.5')).toThrow('[ERROR] 시도 횟수는 양의 정수여야 합니다.');
    expect(() => validateTryCount(' ')).toThrow('[ERROR] 시도 횟수는 양의 정수여야 합니다.');
    expect(() => validateTryCount('0')).toThrow('[ERROR] 시도 횟수는 양의 정수여야 합니다.');
    expect(() => validateTryCount('-3')).toThrow('[ERROR] 시도 횟수는 양의 정수여야 합니다.');
  });
});
