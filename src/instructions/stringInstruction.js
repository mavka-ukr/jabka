import Instruction from "./instruction.js";

class StringInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {StringNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default StringInstruction;
