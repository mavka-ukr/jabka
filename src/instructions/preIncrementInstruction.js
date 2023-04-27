import Instruction from "./instruction.js";

class PreIncrementInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {PreIncrementNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default PreIncrementInstruction;
