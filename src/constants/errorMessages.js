const COMMON_ERROR_MESSAGES = {
  EMPTY_INPUT: '[ERROR] 입력값을 입력해 주세요.',
  NOT_A_NUMBER: '[ERROR] 입력값은 숫자만 입력할 수 있습니다.',
  INVALID_NEGATIVE_OR_ZERO: '[ERROR] 입력값은 0보다 커야 합니다.',
  NOT_INTEGER: '[ERROR] 입력값은 정수로 입력해야 합니다.',
};

const PURCHASE_ERROR_MESSAGE = {
  NOT_THOUSAND_UNIT: '[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.',
};

const LOTTO_ERROR_MESSAGES = {
  OUT_OF_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  DUPLICATED: '[ERROR] 당첨 번호는 중복되면 안 됩니다.',
  INVALID_FORMAT: '[ERROR] 당첨 번호 형식이 올바르지 않습니다.',
  INVALID_LENGTH: '[ERROR] 당첨 번호는 6개여야 합니다.',
  INVALID_DELIMITER: '[ERROR] 당첨 번호는 쉼표(,)로 구분해야 합니다.',
};

const BONUS_ERROR_MESSAGE = {
  DUPLICATED_WITH_WINNING: '[ERROR] 보너스 번호는 당첨 번호와 중복되면 안 됩니다.',
};

export { COMMON_ERROR_MESSAGES, PURCHASE_ERROR_MESSAGE, LOTTO_ERROR_MESSAGES, BONUS_ERROR_MESSAGE };
