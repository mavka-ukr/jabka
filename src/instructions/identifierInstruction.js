import Instruction from "./instruction.js";

class IdentifierInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {IdentifierNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default IdentifierInstruction;
