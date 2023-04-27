import Instruction from "./instruction.js";

class PostDecrementInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {PostDecrementNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default PostDecrementInstruction;
