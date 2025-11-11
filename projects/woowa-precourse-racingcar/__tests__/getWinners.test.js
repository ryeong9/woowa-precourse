import getWinners from '../src/domain/getWinners.js';

describe('우승자 계산', () => {
  test('단일 우승자 계산', () => {
    const cars = [
      { name: 'pobi', position: 5 },
      { name: 'woni', position: 4 },
      { name: 'jun', position: 3 },
    ];
    expect(getWinners(cars)).toEqual(['pobi']);
  });

  test('공동 우승자 계산', () => {
    const cars = [
      { name: 'pobi', position: 5 },
      { name: 'woni', position: 4 },
      { name: 'jun', position: 5 },
    ];
    expect(getWinners(cars)).toEqual(['pobi', 'jun']);
  });

  test('모두 0일 경우도 공동 우승자로 계산', () => {
    const cars = [
      { name: 'pobi', position: 0 },
      { name: 'woni', position: 0 },
      { name: 'jun', position: 0 },
    ];
    expect(getWinners(cars)).toEqual(['pobi', 'woni', 'jun']);
  });
});
