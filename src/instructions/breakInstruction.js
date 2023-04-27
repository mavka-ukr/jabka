import Instruction from "./instruction.js";

class BreakInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {BreakNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default BreakInstruction;
