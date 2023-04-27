import Instruction from "./instruction.js";

class ObjectDestructionInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {ObjectDestructionNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default ObjectDestructionInstruction;
