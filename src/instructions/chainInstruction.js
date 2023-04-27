import Instruction from "./instruction.js";

class ChainInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {ChainNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default ChainInstruction;
