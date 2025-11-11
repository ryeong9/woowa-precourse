import { ERROR_MESSAGES } from "../constants/errorMessages.js";

export function parseInput(input) {
  input = input.replace(/\\n/g, "\n");

  const customDelimiterPattern = /^\/\/(.)\n(.*)$/;
  const match = input.match(customDelimiterPattern);

  if (match) {
    const [, delimiter, numbers] = match;

    const parts = numbers.split(delimiter);
    if (parts.length === 0 || parts.some((p) => p.trim() === "")) {
      throw new Error(ERROR_MESSAGES.INVALID_CUSTOM_DELIMITER);
    }

    return parts;
  }

  return input.split(/,|:/);
}
