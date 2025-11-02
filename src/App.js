import { Console } from '@woowacourse/mission-utils';
import { readBonusNumber, readPurchaseAmount, readWinningNumbers } from './view/inputView.js';
import issueLotto from './services/lottoGenerator.js';
import { printIssuedLottos, printStatistics, printYieldPercent } from './view/outputView.js';
import { aggregateResults, calculateYield } from './services/statistics.js';

class App {
  async #retryUntilValid(readFn) {
    try {
      return await readFn();
    } catch (error) {
      Console.print(error.message);
      return this.#retryUntilValid(readFn);
    }
  }

  async run() {
    const purchaseAmount = await this.#retryUntilValid(readPurchaseAmount);
    const lottos = issueLotto(purchaseAmount);
    printIssuedLottos(lottos);

    const winningNumbers = await this.#retryUntilValid(readWinningNumbers);
    const bonusNumber = await this.#retryUntilValid(() => readBonusNumber(winningNumbers));

    const { counts: rankCounts, totalPrize } = aggregateResults(
      lottos,
      winningNumbers,
      bonusNumber,
    );
    printStatistics(rankCounts);

    const yieldPercentValue = calculateYield(totalPrize, purchaseAmount);
    printYieldPercent(yieldPercentValue);
  }
}

export default App;
