import Instruction from "./instruction.js";

class AssignInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {AssignNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default AssignInstruction;
