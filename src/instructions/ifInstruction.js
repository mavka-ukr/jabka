import Instruction from "./instruction.js";

class IfInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {IfNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default IfInstruction;
