import Instruction from "./instruction.js";

class PostIncrementInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {PostIncrementNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default PostIncrementInstruction;
