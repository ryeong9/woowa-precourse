import { RANK } from '../constants/rules.js';

const countMatches = function countMatches(numbers, winningSet) {
  return numbers.filter((number) => winningSet.has(number)).length;
};

const judgeResult = function judgeResult(numbers, winningNumbers, bonus) {
  const winningSet = new Set(winningNumbers);
  const match = countMatches(numbers, winningSet);

  if (match === 6) return RANK.FIRST;
  if (match === 5 && numbers.includes(bonus)) return RANK.SECOND;
  if (match === 5) return RANK.THIRD;
  if (match === 4) return RANK.FOURTH;
  if (match === 3) return RANK.FIFTH;
  return null;
};

export default judgeResult;
