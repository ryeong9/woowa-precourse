import { MissionUtils } from '@woowacourse/mission-utils';

export default function generateRandomNumber() {
  return MissionUtils.Random.pickNumberInRange(0, 9);
}