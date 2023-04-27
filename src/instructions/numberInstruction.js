import Instruction from "./instruction.js";

class NumberInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {NumberNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default NumberInstruction;
