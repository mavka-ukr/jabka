import Instruction from "./instruction.js";

class ModuleInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {ModuleNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default ModuleInstruction;
