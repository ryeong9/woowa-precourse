import { LOTTO_ERROR_MESSAGES } from '../constants/errorMessages.js';
import { LOTTO } from '../constants/rules.js';
import { validateLottoNumbers } from '../utils/validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = [...numbers].sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (!Array.isArray(numbers) || numbers.length !== LOTTO.COUNT) {
      throw new Error(LOTTO_ERROR_MESSAGES.INVALID_LENGTH);
    }
    validateLottoNumbers(numbers);
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
