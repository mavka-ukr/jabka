import Instruction from "./instruction.js";

class GetElementInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {GetElementNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default GetElementInstruction;
