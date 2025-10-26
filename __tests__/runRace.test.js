import runRace from '../src/domain/runRace.js';

describe('레이싱 도메인 검증', () => {
  test('단일 라운드에서의 전진/정지 결과', () => {
    // 4(전진), 2(정지), 9(전진) 순으로 주입
    const randomNumberGenerator = jest
      .fn()
      .mockReturnValueOnce(4)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(9);

    const carNameList = ['pobi', 'woni', 'jun'];
    const tryCount = 1;

    const { roundHistory, cars } = runRace(carNameList, tryCount, randomNumberGenerator);

    expect(roundHistory).toHaveLength(1);
    expect(roundHistory[0].map((car) => car.position)).toEqual([1, 0, 1]);
    expect(cars.map((car) => car.position)).toEqual([1, 0, 1]);
    expect(randomNumberGenerator).toHaveBeenCalledTimes(3);
  });

  test('여러 라운드에서의 전진/정지 결과', () => {
    // 라운드마다 [4,2,9]를 순환 반환
    const values = [4, 2, 9];
    let index = 0;
    const randomNumberGenerator = jest.fn(() => {
      const value = values[index % values.length];
      index += 1;
      return value;
    });

    const carNameList = ['pobi', 'woni', 'jun'];
    const tryCount = 3;

    const { roundHistory, cars } = runRace(carNameList, tryCount, randomNumberGenerator);

    expect(roundHistory).toHaveLength(3);
    expect(cars.map((car) => car.position)).toEqual([3, 0, 3]);
    expect(randomNumberGenerator).toHaveBeenCalledTimes(9);
  });
});
