import Instruction from "./instruction.js";

class ReturnInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {ReturnNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default ReturnInstruction;
