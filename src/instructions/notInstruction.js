import Instruction from "./instruction.js";

class NotInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {NotNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default NotInstruction;
