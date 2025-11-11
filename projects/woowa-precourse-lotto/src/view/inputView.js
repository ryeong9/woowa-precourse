import { Console } from '@woowacourse/mission-utils';
import {
  parseBonusNumberInput,
  parsePurchaseInput,
  parseWinningNumberInput,
} from '../utils/parser.js';
import {
  validateBonusNumber,
  validateLottoNumbers,
  validatePurchaseAmount,
} from '../utils/validator.js';

const askQuestion = async function askQuestion(questionText) {
  return Console.readLineAsync(`${questionText}`);
};

const readPurchaseAmount = async function readPurchaseAmount() {
  const rawInput = await askQuestion('구입금액을 입력해 주세요.\n');
  const purchaseAmount = parsePurchaseInput(rawInput);
  validatePurchaseAmount(purchaseAmount);
  return purchaseAmount;
};

const readWinningNumbers = async function readWinningNumbers() {
  const rawInput = await askQuestion('\n당첨 번호를 입력해 주세요.\n');
  const winningNumbers = parseWinningNumberInput(rawInput);
  validateLottoNumbers(winningNumbers);
  return winningNumbers;
};

const readBonusNumber = async function readBonusNumber(winningNumbers) {
  const rawInput = await askQuestion('\n보너스 번호를 입력해 주세요.\n');
  const bonusNumber = parseBonusNumberInput(rawInput);
  validateBonusNumber(bonusNumber, winningNumbers);
  return bonusNumber;
};

export { readPurchaseAmount, readWinningNumbers, readBonusNumber };
