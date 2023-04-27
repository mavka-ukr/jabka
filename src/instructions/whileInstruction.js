import Instruction from "./instruction.js";

class WhileInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {WhileNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default WhileInstruction;
