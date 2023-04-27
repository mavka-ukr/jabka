import Instruction from "./instruction.js";

class FunctionInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {FunctionNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default FunctionInstruction;
