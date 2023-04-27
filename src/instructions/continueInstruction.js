import Instruction from "./instruction.js";

class ContinueInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {ContinueNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default ContinueInstruction;
