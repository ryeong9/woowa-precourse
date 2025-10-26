import parseInput from '../utils/parseInput.js';
import { validateCarNames } from '../utils/validator.js';


const parseAndValidateCarNames = function parseAndValidateCarNames(input) {
  const names = parseInput(input);
  validateCarNames(names);
  return names;
};

export default parseAndValidateCarNames;
