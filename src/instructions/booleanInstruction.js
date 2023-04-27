import Instruction from "./instruction.js";

class BooleanInstruction extends Instruction {
  /**
   * @param {Scope} scope
   * @param {BooleanNode} node
   * @returns {*}
   */
  runSync(scope, node) {
    return node.value ? this.mavka.yes : this.mavka.no;
  }
}

export default BooleanInstruction;
