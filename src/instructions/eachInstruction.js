import Instruction from "./instruction.js";

class EachInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {EachNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default EachInstruction;
