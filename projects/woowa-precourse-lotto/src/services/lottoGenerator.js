import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from '../constants/rules.js';
import Lotto from '../domain/Lotto.js';

const pickNumbers = function pickNumbers(random = Random) {
  return random.pickUniqueNumbersInRange(LOTTO.MIN, LOTTO.MAX, LOTTO.COUNT);
};

const issueLotto = function issueLotto(amount, random = Random) {
  const count = amount / LOTTO.PRICE;
  return Array.from({ length: count }, () => new Lotto(pickNumbers(random)));
};

export default issueLotto;
