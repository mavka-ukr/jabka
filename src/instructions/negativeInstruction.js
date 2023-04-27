import Instruction from "./instruction.js";

class NegativeInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {NegativeNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default NegativeInstruction;
