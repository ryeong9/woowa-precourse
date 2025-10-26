import { Console } from '@woowacourse/mission-utils';
import parseAndValidateCarNames from './domain/parseAndValidateCarNames.js';
import { validateTryCount } from './utils/validator.js';
import runRace from './domain/runRace.js';
import { formatRound, formatWinner } from './view/formatters.js';
import getWinners from './domain/getWinners.js';


class App {
  async run() {
    try {
      const nameInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
      const carNames = parseAndValidateCarNames(nameInput);

      const tryInput = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
      const tryCount = validateTryCount(tryInput);

      Console.print('\n실행 결과\n');

      const { roundHistory, cars } = runRace(carNames, tryCount);

      roundHistory.forEach((roundCars) => {
        Console.print(formatRound(roundCars));
        Console.print('');
      });

      const winner = getWinners(cars);
      Console.print(formatWinner(winner));
    } catch (error) {
      Console.print(`${error.message}`);
      throw error;
    }
  }
}

export default App;
