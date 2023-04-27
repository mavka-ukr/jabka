import Instruction from "./instruction.js";

class PreDecrementInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {PreDecrementNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default PreDecrementInstruction;
