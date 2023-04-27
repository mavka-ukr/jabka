import Instruction from "./instruction.js";

class ArrayDestructionInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {ArrayDestructionNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default ArrayDestructionInstruction;
