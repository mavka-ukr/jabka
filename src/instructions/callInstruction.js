import Instruction from "./instruction.js";

class CallInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {CallNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default CallInstruction;
