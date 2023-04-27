import Instruction from "./instruction.js";

class BitwiseNotInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {BitwiseNotNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default BitwiseNotInstruction;
