import { formatRound, formatWinner } from '../src/view/formatters.js';

describe('출력 포맷', () => {
  test('라운드 출력 포맷', () => {
    const cars = [{ name: 'pobi', position: 2 }, { name: 'woni', position: 0 }];
    expect(formatRound(cars)).toBe('pobi : --\nwoni : ');
  });

  test('단일 우승자 출력 포맷', () => {
    expect(formatWinner(['pobi'])).toBe('최종 우승자 : pobi');
  });

  test('공동 우승자 출력 포맷', () => {
    expect(formatWinner(['pobi', 'jun'])).toBe('최종 우승자 : pobi, jun');
  });
});