import asLottoNumbers from './asLottoNumbers.js';

const formatYieldPercent = function formatYieldPercent(percentValue) {
  return `${percentValue.toLocaleString('ko-KR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })}%`;
};

const formatLottoLine = function formatLottoLine(lotto) {
  const numbers = asLottoNumbers(lotto);
  return `[${numbers.join(', ')}]`;
};

export { formatYieldPercent, formatLottoLine };
