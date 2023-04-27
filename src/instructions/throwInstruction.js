import Instruction from "./instruction.js";

class ThrowInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {ThrowNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default ThrowInstruction;
