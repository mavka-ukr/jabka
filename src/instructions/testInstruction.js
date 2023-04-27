import Instruction from "./instruction.js";

class TestInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {TestNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default TestInstruction;
