import { COMMON_ERROR_MESSAGES, LOTTO_ERROR_MESSAGES } from '../../src/constants/errorMessages.js';
import Lotto from '../../src/domain/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
  test('범위 초과(46)면 예외 처리', () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 46])).toThrow(LOTTO_ERROR_MESSAGES.OUT_OF_RANGE);
  });

  test('0 포함이면 예외 처리', () => {
    expect(() => new Lotto([0, 2, 3, 4, 5, 6])).toThrow(
      COMMON_ERROR_MESSAGES.INVALID_NEGATIVE_OR_ZERO,
    );
  });

  test('정상 생성 시 오름차순 정렬', () => {
    const lotto = new Lotto([8, 21, 23, 41, 42, 43]);
    expect(lotto.getNumbers()).toEqual([8, 21, 23, 41, 42, 43]);
  });
});
