import Instruction from "./instruction.js";

class WaitInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {WaitNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default WaitInstruction;
