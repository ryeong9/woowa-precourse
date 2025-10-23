import parseInput from '../src/utils/parseInput.js';

describe('입력 문자열 파싱', () => {
  test('정상 입력일 경우, 이름 배열로 반환한다.', () => {
    const input = 'pobi,woni,jun';
    expect(parseInput(input)).toEqual(['pobi', 'woni', 'jun']);
  });

  test('입력 문자열이 빈 문자열이면 예외 발생', () => {
    expect(() => parseInput('')).toThrow('[ERROR] 자동차 이름은 빈 문자열일 수 없습니다.');
  });

  test('입력 문자열이 공백만 있으면 예외 발생', () => {
    expect(() => parseInput('   ')).toThrow('[ERROR] 자동차 이름은 빈 문자열일 수 없습니다.');
  });

  test('쉼표로 시작하거나 끝나는 경우 예외 발생', () => {
    expect(() => parseInput(',pobi,woni')).toThrow('[ERROR] 자동차 이름 사이에 빈 값이 있습니다.');
    expect(() => parseInput('pobi,woni,')).toThrow('[ERROR] 자동차 이름 사이에 빈 값이 있습니다.');
  });

  test('쉼표가 연속으로 입력된 경우 예외 발생', () => {
    expect(() => parseInput('pobi,,woni')).toThrow('[ERROR] 자동차 이름 사이에 빈 값이 있습니다.');
  });

  test('쉼표가 아닌 다른 구분자 사용 시 예외 발생', () => {
    expect(() => parseInput('pobi|woni')).toThrow('[ERROR] 자동차 이름은 쉼표(,)로만 구분해야 합니다.');
  });

  test('각 이름의 앞뒤 공백은 제거되어야 한다.', () => {
    const input = '  pobi , woni  , jun ';
    expect(parseInput(input)).toEqual(['pobi', 'woni', 'jun']);
  });
});