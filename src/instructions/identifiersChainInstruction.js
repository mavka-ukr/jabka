import Instruction from "./instruction.js";

class IdentifiersChainInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {IdentifiersChainNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default IdentifiersChainInstruction;
