import Instruction from "./instruction.js";

class TakeModuleInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {TakeModuleNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default TakeModuleInstruction;
