import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from '../constants/rules.js';
import Lotto from '../domain/Lotto.js';

const pickNumbers = function pickNumbers(rand = Random) {
  return rand.pickUniqueNumbersInRange(LOTTO.MIN, LOTTO.MAX, LOTTO.COUNT);
};

const issueLotto = function issueLotto(amount, rand = Random) {
  const count = amount / LOTTO.PRICE;
  return Array.from({ length: count }, () => new Lotto(pickNumbers(rand)));
};

export default issueLotto;
