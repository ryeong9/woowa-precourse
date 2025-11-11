import { RANK } from '../../src/constants/rules.js';
import judgeResult from '../../src/services/judgeResult.js';

describe('로또 결과 판정', () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonus = 7;

  test.each([
    { numbers: [1, 2, 3, 4, 5, 6], rank: RANK.FIRST },
    { numbers: [1, 2, 3, 4, 5, 7], rank: RANK.SECOND },
    { numbers: [1, 2, 3, 4, 5, 45], rank: RANK.THIRD },
    { numbers: [1, 2, 3, 4, 44, 45], rank: RANK.FOURTH },
    { numbers: [1, 2, 3, 40, 41, 42], rank: RANK.FIFTH },
    { numbers: [8, 9, 10, 11, 12, 13], rank: null },
  ])('판정 결과 $numbers → $rank', ({ numbers, rank }) => {
    expect(judgeResult(numbers, winningNumbers, bonus)).toBe(rank);
  });
});
