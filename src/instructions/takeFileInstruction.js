import Instruction from "./instruction.js";

class TakeFileInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {TakeFileNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default TakeFileInstruction;
