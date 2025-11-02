const asLottoNumbers = function asLottoNumbers(lotto) {
  if (Array.isArray(lotto)) {
    return lotto;
  }
  if (lotto && typeof lotto.getNumbers === 'function') {
    return lotto.getNumbers();
  }
  return [];
};
export default asLottoNumbers;
