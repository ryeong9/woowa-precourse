import parseInput from '../utils/parseInput.js';
import { validateCarNames } from '../utils/validator.js';


export default function parseAndValidateCarNames(input) {
  const names = parseInput(input);
  validateCarNames(names);
  return names;
}