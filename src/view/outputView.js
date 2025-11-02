import { Console } from '@woowacourse/mission-utils';
import { PRIZE, RANK } from '../constants/rules.js';
import { formatLottoLine, formatYieldPercent } from '../utils/format.js';

const printIssuedLottos = function printIssuedLottos(lottos) {
  Console.print(`\n${lottos.length}개를 구매했습니다.`);
  lottos.forEach((lotto) => {
    Console.print(formatLottoLine(lotto));
  });
};

const printStatistics = function printStatistics(rankCounts) {
  Console.print('\n당첨 통계');
  Console.print('---');
  Console.print(
    `3개 일치 (${PRIZE[RANK.FIFTH].toLocaleString('ko-KR')}원) - ${rankCounts[RANK.FIFTH]}개`,
  );
  Console.print(
    `4개 일치 (${PRIZE[RANK.FOURTH].toLocaleString('ko-KR')}원) - ${rankCounts[RANK.FOURTH]}개`,
  );
  Console.print(
    `5개 일치 (${PRIZE[RANK.THIRD].toLocaleString('ko-KR')}원) - ${rankCounts[RANK.THIRD]}개`,
  );
  Console.print(
    `5개 일치, 보너스 볼 일치 (${PRIZE[RANK.SECOND].toLocaleString('ko-KR')}원) - ${
      rankCounts[RANK.SECOND]
    }개`,
  );
  Console.print(
    `6개 일치 (${PRIZE[RANK.FIRST].toLocaleString('ko-KR')}원) - ${rankCounts[RANK.FIRST]}개`,
  );
};

const printYieldPercent = function printYieldPercent(percentValue) {
  Console.print(`총 수익률은 ${formatYieldPercent(percentValue)}입니다.`);
};

export { printIssuedLottos, printStatistics, printYieldPercent };
