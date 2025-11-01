import { LOTTO } from '../../src/constants/rules.js';
import { issueLotto } from '../../src/services/lottoGenerator.js';

describe('로또 생성', () => {
  test('금액에 맞춰 N장 발급 + 오름차순 정렬', () => {
    const fakeRandom = {
      pickUniqueNumbersInRange: jest
        .fn()
        .mockReturnValueOnce([8, 43, 21, 41, 23, 42])
        .mockReturnValueOnce([38, 3, 16, 32, 11, 5]),
    };

    const tickets = issueLotto(2 * LOTTO.PRICE, fakeRandom);

    expect(fakeRandom.pickUniqueNumbersInRange).toHaveBeenCalledTimes(2);
    expect(tickets).toHaveLength(2);
    expect(tickets[0].getNumbers()).toEqual([8, 21, 23, 41, 42, 43]);
    expect(tickets[1].getNumbers()).toEqual([3, 5, 11, 16, 32, 38]);
  });
});
