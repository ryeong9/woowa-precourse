import { PRIZE, RANK } from '../constants/rules.js';
import asLottoNumbers from '../utils/asLottoNumbers.js';
import judgeResult from './judgeResult.js';

const createEmptyRankCounts = function createEmptyRankCounts() {
  return {
    [RANK.FIRST]: 0,
    [RANK.SECOND]: 0,
    [RANK.THIRD]: 0,
    [RANK.FOURTH]: 0,
    [RANK.FIFTH]: 0,
  };
};

const addIfRank = function addIfRank(state, rank) {
  if (!rank) return;
  state.counts[rank] += 1;
  state.totalPrize += PRIZE[rank];
};

const aggregateResults = function aggregateResults(lottos, winningNumbers, bonusNumber) {
  const state = { counts: createEmptyRankCounts(), totalPrize: 0 };

  for (const lotto of lottos) {
    const numbers = asLottoNumbers(lotto);
    const rank = judgeResult(numbers, winningNumbers, bonusNumber);
    addIfRank(state, rank);
  }
  return state;
};

const calculateYield = function calculateYield(totalPrize, amount) {
  if (amount <= 0) return 0;
  const percent = (totalPrize * 100) / amount;
  return Number(percent.toFixed(1));
};

export { aggregateResults, calculateYield };
