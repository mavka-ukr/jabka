import Instruction from "./instruction.js";

class DictionaryInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {DictionaryNode} node
   * @returns {*}
   */
  runSync(scope, node) {
  }
}

export default DictionaryInstruction;
