import Instruction from "./utils/instruction.js";

class EvalInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {EvalNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default EvalInstruction;
