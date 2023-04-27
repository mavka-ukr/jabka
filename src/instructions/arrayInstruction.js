import Instruction from "./instruction.js";

class ArrayInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {ArrayNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default ArrayInstruction;
