import { MissionUtils } from '@woowacourse/mission-utils';
import generateRandomNumber from '../src/utils/generateRandomNumber.js';

describe('랜덤 숫자 검증', () => {
  test('MissionUtils.Random.pickNumberInRange를 호출한다', () => {
    const spy = jest.spyOn(MissionUtils.Random, 'pickNumberInRange');
    generateRandomNumber();
    expect(spy).toHaveBeenCalledWith(0, 9);
    spy.mockRestore();
  });

  test('0~9 범위의 숫자를 반환한다.', () => {
    const num = generateRandomNumber();
    expect(num).toBeGreaterThanOrEqual(0);
    expect(num).toBeLessThanOrEqual(9);
  });
});
