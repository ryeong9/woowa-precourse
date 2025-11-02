import Lotto from '../../src/domain/Lotto.js';
import { formatLottoLine, formatYieldPercent } from '../../src/utils/format.js';

describe('포맷 관련', () => {
  test.each([
    { value: 62.5, expected: '62.5%' },
    { value: 1000, expected: '1,000.0%' },
  ])('수익률 출력 포맷: $value → $expected', ({ value, expected }) => {
    expect(formatYieldPercent(value)).toBe(expected);
  });

  test('배열 입력할 경우 문자열로 포맷', () => {
    expect(formatLottoLine([9, 1, 7, 3, 5, 2])).toBe('[9, 1, 7, 3, 5, 2]');
  });
  test('Lotto 인스턴스 입력할 경우 getNumbers()를 사용해 포맷', () => {
    const lotto = new Lotto([43, 8, 23, 42, 41, 21]);
    expect(formatLottoLine(lotto)).toBe('[8, 21, 23, 41, 42, 43]');
  });
  test('유효하지 않은 입력이면 []를 반환', () => {
    expect(formatLottoLine(null)).toBe('[]');
  });
});
