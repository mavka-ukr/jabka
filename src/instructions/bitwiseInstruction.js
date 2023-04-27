import Instruction from "./instruction.js";

class BitwiseInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {BitwiseNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default BitwiseInstruction;
