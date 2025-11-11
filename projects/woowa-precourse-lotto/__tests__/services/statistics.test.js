import { PRIZE, RANK } from '../../src/constants/rules.js';
import Lotto from '../../src/domain/Lotto.js';
import { aggregateResults, calculateYield } from '../../src/services/statistics.js';

describe('통계 집계 및 수익률 계산', () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;

  test('각 등수 1장씩 집계 + 총 상금 합산', () => {
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([1, 2, 3, 4, 5, 45]),
      new Lotto([1, 2, 3, 4, 44, 45]),
      new Lotto([1, 2, 3, 40, 41, 42]),
    ];

    const { counts, totalPrize } = aggregateResults(lottos, winningNumbers, bonusNumber);

    expect(counts[RANK.FIRST]).toBe(1);
    expect(counts[RANK.SECOND]).toBe(1);
    expect(counts[RANK.THIRD]).toBe(1);
    expect(counts[RANK.FOURTH]).toBe(1);
    expect(counts[RANK.FIFTH]).toBe(1);

    const sum =
      PRIZE[RANK.FIRST] +
      PRIZE[RANK.SECOND] +
      PRIZE[RANK.THIRD] +
      PRIZE[RANK.FOURTH] +
      PRIZE[RANK.FIFTH];
    expect(totalPrize).toBe(sum);
  });

  test('모두 낙첨이면 0 카운트/0 상금', () => {
    const lottos = [new Lotto([10, 11, 12, 13, 14, 15]), new Lotto([20, 21, 22, 23, 24, 25])];
    const { counts, totalPrize } = aggregateResults(lottos, winningNumbers, bonusNumber);

    expect(Object.values(counts).every((value) => value === 0)).toBe(true);
    expect(totalPrize).toBe(0);
  });

  test.each([
    { totalPrize: 6250, amount: 10000, expected: 62.5 },
    { totalPrize: 1205, amount: 10000, expected: 12.1 },
    { totalPrize: 0, amount: 8000, expected: 0.0 },
  ])('수익률 계산: $totalPrize / $amount → $expected', ({ totalPrize, amount, expected }) => {
    expect(calculateYield(totalPrize, amount)).toBe(expected);
  });
});
