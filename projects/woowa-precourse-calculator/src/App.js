import { Console } from "@woowacourse/mission-utils";
import { parseInput } from "./utils/parser.js";
import { validateAndConvert } from "./utils/validator.js";
import { calculateSum } from "./utils/calculator.js";

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
    if (input === "") {
      Console.print("결과 : 0");
      return;
    }

    try {
      const separated = parseInput(input);
      const validated = validateAndConvert(separated);
      const sum = calculateSum(validated);
      Console.print(`결과 : ${sum}`);
    } catch (error) {
      Console.print(`${error.message}`);
      throw error;
    }
  }
}

export default App;
