import Instruction from "./instruction.js";

class TakeRemoteInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {TakeRemoteNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default TakeRemoteInstruction;
