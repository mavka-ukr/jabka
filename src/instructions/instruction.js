class Instruction {
  constructor(mavka) {
    this.mavka = mavka;
  }

  /**
   * @param {Scope} scope
   * @param {ASTNode} node
   */
  runSync(scope, node) {
  }

  run(context, node, options = {}) {
    return this.runSync(scope, node);
  }
}

export default Instruction;
