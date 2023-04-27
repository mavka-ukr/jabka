import Instruction from "./instruction.js";

class TryInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {TryNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default TryInstruction;
