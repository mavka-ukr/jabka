import Instruction from "./instruction.js";

class ComparisonInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {ComparisonNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default ComparisonInstruction;
