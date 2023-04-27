import Instruction from "./instruction.js";

class AnonymousDiiaInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {AnonymousDiiaNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default AnonymousDiiaInstruction;
