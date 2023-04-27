import AssignInstruction from "./instructions/assignInstruction.js";
import ChainInstruction from "./instructions/chainInstruction.js";
import DiiaInstruction from "./instructions/diiaInstruction.js";
import EachInstruction from "./instructions/eachInstruction.js";
import ArithmeticInstruction from "./instructions/arithmeticInstruction.js";
import IfInstruction from "./instructions/ifInstruction.js";
import FunctionInstruction from "./instructions/functionInstruction.js";
import NumberInstruction from "./instructions/numberInstruction.js";
import ReturnInstruction, { ReturnSignal } from "./instructions/returnInstruction.js";
import StringInstruction from "./instructions/stringInstruction.js";
import StructureInstruction from "./instructions/structureInstruction.js";
import ComparisonInstruction from "./instructions/comparisonInstruction.js";
import WaitInstruction from "./instructions/waitInstruction.js";
import GiveInstruction from "./instructions/giveInstruction.js";
import ChainNode from "mavka-parser/src/ast/ChainNode.js";
import ArithmeticNode from "mavka-parser/src/ast/ArithmeticNode.js";
import NumberNode from "mavka-parser/src/ast/NumberNode.js";
import StringNode from "mavka-parser/src/ast/StringNode.js";
import BooleanNode from "mavka-parser/src/ast/BooleanNode.js";
import DiiaNode from "mavka-parser/src/ast/DiiaNode.js";
import IfNode from "mavka-parser/src/ast/IfNode.js";
import TestNode from "mavka-parser/src/ast/TestNode.js";
import AssignNode from "mavka-parser/src/ast/AssignNode.js";
import ReturnNode from "mavka-parser/src/ast/ReturnNode.js";
import EachNode from "mavka-parser/src/ast/EachNode.js";
import StructureNode from "mavka-parser/src/ast/StructureNode.js";
import WaitNode from "mavka-parser/src/ast/WaitNode.js";
import GiveNode from "mavka-parser/src/ast/GiveNode.js";
import BooleanInstruction from "./instructions/booleanInstruction.js";
import AnonymousDiiaInstruction from "./instructions/anonymousDiiaInstruction.js";
import AnonymousDiiaNode from "mavka-parser/src/ast/AnonymousDiiaNode.js";
import TryInstruction from "./instructions/tryInstruction.js";
import ThrowInstruction from "./instructions/throwInstruction.js";
import ThrowNode from "mavka-parser/src/ast/ThrowNode.js";
import TryNode from "mavka-parser/src/ast/TryNode.js";
import WhileNode from "mavka-parser/src/ast/WhileNode.js";
import WhileInstruction from "./instructions/whileInstruction.js";
import ModuleNode from "mavka-parser/src/ast/ModuleNode.js";
import ModuleInstruction from "./instructions/moduleInstruction.js";
import ProgramNode from "mavka-parser/src/ast/ProgramNode.js";
import FunctionNode from "mavka-parser/src/ast/FunctionNode.js";
import CallNode from "mavka-parser/src/ast/CallNode.js";
import CallInstruction from "./instructions/callInstruction.js";
import IdentifierInstruction from "./instructions/identifierInstruction.js";
import IdentifierNode from "mavka-parser/src/ast/IdentifierNode.js";
import IdentifiersChainInstruction from "./instructions/identifiersChainInstruction.js";
import ComparisonNode from "mavka-parser/src/ast/ComparisonNode.js";
import TestInstruction from "./instructions/testInstruction.js";
import TernaryNode from "mavka-parser/src/ast/TernaryNode.js";
import TernaryInstruction from "./instructions/ternaryInstruction.js";
import IdentifiersChainNode from "mavka-parser/src/ast/IdentifiersChainNode.js";
import NegativeInstruction from "./instructions/negativeInstruction.js";
import NegativeNode from "mavka-parser/src/ast/NegativeNode.js";
import ArrayInstruction from "./instructions/arrayInstruction.js";
import ArrayNode from "mavka-parser/src/ast/ArrayNode.js";
import DictionaryInstruction from "./instructions/dictionaryInstruction.js";
import ArrayDestructionInstruction from "./instructions/arrayDestructionInstruction.js";
import BreakInstruction from "./instructions/breakInstruction.js";
import ContinueInstruction from "./instructions/continueInstruction.js";
import NotInstruction from "./instructions/notInstruction.js";
import ObjectDestructionInstruction from "./instructions/objectDestructionInstruction.js";
import PositiveInstruction from "./instructions/positiveInstruction.js";
import PostDecrementInstruction from "./instructions/postDecrementInstruction.js";
import PostIncrementInstruction from "./instructions/postIncrementInstruction.js";
import PreDecrementInstruction from "./instructions/preDecrementInstruction.js";
import PreIncrementInstruction from "./instructions/preIncrementInstruction.js";
import TypeValueInstruction from "./instructions/typeValueInstruction.js";
import ArrayDestructionNode from "mavka-parser/src/ast/ArrayDestructionNode.js";
import BreakNode from "mavka-parser/src/ast/BreakNode.js";
import NotNode from "mavka-parser/src/ast/NotNode.js";
import ObjectDestructionNode from "mavka-parser/src/ast/ObjectDestructionNode.js";
import PositiveNode from "mavka-parser/src/ast/PositiveNode.js";
import PostDecrementNode from "mavka-parser/src/ast/PostDecrementNode.js";
import PostIncrementNode from "mavka-parser/src/ast/PostIncrementNode.js";
import PreDecrementNode from "mavka-parser/src/ast/PreDecrementNode.js";
import TypeValueNode from "mavka-parser/src/ast/TypeValueNode.js";
import GetElementInstruction from "./instructions/getElementInstruction.js";
import DictionaryNode from "mavka-parser/src/ast/DictionaryNode.js";
import PreIncrementNode from "mavka-parser/src/ast/PreIncrementNode.js";
import ContinueNode from "mavka-parser/src/ast/ContinueNode.js";
import GetElementNode from "mavka-parser/src/ast/GetElementNode.js";
import TakeRemoteNode from "mavka-parser/src/ast/TakeRemoteNode.js";
import TakePakNode from "mavka-parser/src/ast/TakePakNode.js";
import TakeModuleNode from "mavka-parser/src/ast/TakeModuleNode.js";
import TakeModuleInstruction from "./instructions/takeModuleInstruction.js";
import TakePakInstruction from "./instructions/takePakInstruction.js";
import TakeRemoteInstruction from "./instructions/takeRemoteInstruction.js";
import TakeFileInstruction from "./instructions/takeFileInstruction.js";
import TakeFileNode from "mavka-parser/src/ast/TakeFileNode.js";
import EvalInstruction from "./instructions/evalInstruction.js";
import EvalNode from "mavka-parser/src/ast/EvalNode.js";
import BitwiseInstruction from "./instructions/bitwiseInstruction.js";
import BitwiseNode from "mavka-parser/src/ast/BitwiseNode.js";
import BitwiseNotInstruction from "./instructions/bitwiseNotInstruction.js";
import BitwiseNotNode from "mavka-parser/src/ast/BitwiseNotNode.js";
import { parse } from "mavka-parser";
import Scope from "./scope.js";

class MavkaCompiler {
  constructor(options = {}) {
    this.anonymousDiiaInstruction = new AnonymousDiiaInstruction(this);
    this.arithmeticInstruction = new ArithmeticInstruction(this);
    this.arrayDestructionInstruction = new ArrayDestructionInstruction(this);
    this.arrayInstruction = new ArrayInstruction(this);
    this.assignInstruction = new AssignInstruction(this);
    this.bitwiseInstruction = new BitwiseInstruction(this);
    this.bitwiseNotInstruction = new BitwiseNotInstruction(this);
    this.booleanInstruction = new BooleanInstruction(this);
    this.breakInstruction = new BreakInstruction(this);
    this.callInstruction = new CallInstruction(this);
    this.chainInstruction = new ChainInstruction(this);
    this.comparisonInstruction = new ComparisonInstruction(this);
    this.continueInstruction = new ContinueInstruction(this);
    this.diiaInstruction = new DiiaInstruction(this);
    this.eachInstruction = new EachInstruction(this);
    this.evalInstruction = new EvalInstruction(this);
    this.functionInstruction = new FunctionInstruction(this);
    this.getElementInstruction = new GetElementInstruction(this);
    this.giveInstruction = new GiveInstruction(this);
    this.identifierInstruction = new IdentifierInstruction(this);
    this.identifiersChainInstruction = new IdentifiersChainInstruction(this);
    this.ifInstruction = new IfInstruction(this);
    this.moduleInstruction = new ModuleInstruction(this);
    this.negativeInstruction = new NegativeInstruction(this);
    this.notInstruction = new NotInstruction(this);
    this.numberInstruction = new NumberInstruction(this);
    this.objectDestructionInstruction = new ObjectDestructionInstruction(this);
    this.dictionaryInstruction = new DictionaryInstruction(this);
    this.positiveInstruction = new PositiveInstruction(this);
    this.postDecrementInstruction = new PostDecrementInstruction(this);
    this.postIncrementInstruction = new PostIncrementInstruction(this);
    this.preDecrementInstruction = new PreDecrementInstruction(this);
    this.preIncrementInstruction = new PreIncrementInstruction(this);
    this.returnInstruction = new ReturnInstruction(this);
    this.stringInstruction = new StringInstruction(this);
    this.structureInstruction = new StructureInstruction(this);
    this.takeFileInstruction = new TakeFileInstruction(this);
    this.takeModuleInstruction = new TakeModuleInstruction(this);
    this.takePakInstruction = new TakePakInstruction(this);
    this.takeRemoteInstruction = new TakeRemoteInstruction(this);
    this.ternaryInstruction = new TernaryInstruction(this);
    this.testInstruction = new TestInstruction(this);
    this.throwInstruction = new ThrowInstruction(this);
    this.tryInstruction = new TryInstruction(this);
    this.typeValueInstruction = new TypeValueInstruction(this);
    this.waitInstruction = new WaitInstruction(this);
    this.whileInstruction = new WhileInstruction(this);
  }

  /**
   * @param {Scope} scope
   * @param {ASTNode} node
   * @param {Object} options
   * @return {ReturnSignal|Cell}
   */
  compileNode(scope, node, options = {}) {
    if (node instanceof AnonymousDiiaNode) {
      return this.anonymousDiiaInstruction.run(scope, node, options);
    }

    if (node instanceof ArithmeticNode) {
      return this.arithmeticInstruction.run(scope, node, options);
    }

    if (node instanceof ArrayDestructionNode) {
      return this.arrayDestructionInstruction.run(scope, node, options);
    }

    if (node instanceof ArrayNode) {
      return this.arrayInstruction.run(scope, node, options);
    }

    if (node instanceof AssignNode) {
      return this.assignInstruction.run(scope, node, options);
    }

    if (node instanceof BitwiseNode) {
      return this.bitwiseInstruction.run(scope, node, options);
    }

    if (node instanceof BitwiseNotNode) {
      return this.bitwiseNotInstruction.run(scope, node, options);
    }

    if (node instanceof BooleanNode) {
      return this.booleanInstruction.run(scope, node, options);
    }

    if (node instanceof BreakNode) {
      return this.breakInstruction.run(scope, node, options);
    }

    if (node instanceof CallNode) {
      return this.callInstruction.run(scope, node, options);
    }

    if (node instanceof ChainNode) {
      return this.chainInstruction.run(scope, node, options);
    }

    if (node instanceof ComparisonNode) {
      return this.comparisonInstruction.run(scope, node, options);
    }

    if (node instanceof ContinueNode) {
      return this.continueInstruction.run(scope, node, options);
    }

    if (node instanceof DiiaNode) {
      return this.diiaInstruction.run(scope, node, options);
    }

    if (node instanceof EachNode) {
      return this.eachInstruction.run(scope, node, options);
    }

    if (node instanceof EvalNode) {
      return this.evalInstruction.run(scope, node, options);
    }

    if (node instanceof FunctionNode) {
      return this.functionInstruction.run(scope, node, options);
    }

    if (node instanceof GetElementNode) {
      return this.getElementInstruction.run(scope, node, options);
    }

    if (node instanceof GiveNode) {
      return this.giveInstruction.run(scope, node, options);
    }

    if (node instanceof IdentifierNode) {
      return this.identifierInstruction.run(scope, node, options);
    }

    if (node instanceof IdentifiersChainNode) {
      return this.identifiersChainInstruction.run(scope, node, options);
    }

    if (node instanceof IfNode) {
      return this.ifInstruction.run(scope, node, options);
    }

    if (node instanceof ModuleNode) {
      return this.moduleInstruction.run(scope, node, options);
    }

    if (node instanceof NegativeNode) {
      return this.negativeInstruction.run(scope, node, options);
    }

    if (node instanceof NotNode) {
      return this.notInstruction.run(scope, node, options);
    }

    if (node instanceof NumberNode) {
      return this.numberInstruction.run(scope, node, options);
    }

    if (node instanceof ObjectDestructionNode) {
      return this.objectDestructionInstruction.run(scope, node, options);
    }

    if (node instanceof DictionaryNode) {
      return this.dictionaryInstruction.run(scope, node, options);
    }

    if (node instanceof PositiveNode) {
      return this.positiveInstruction.run(scope, node, options);
    }

    if (node instanceof PostDecrementNode) {
      return this.postDecrementInstruction.run(scope, node, options);
    }

    if (node instanceof PostIncrementNode) {
      return this.postIncrementInstruction.run(scope, node, options);
    }

    if (node instanceof PreDecrementNode) {
      return this.preDecrementInstruction.run(scope, node, options);
    }

    if (node instanceof PreIncrementNode) {
      return this.preIncrementInstruction.run(scope, node, options);
    }

    if (node instanceof ReturnNode) {
      return this.returnInstruction.run(scope, node, options);
    }

    if (node instanceof StringNode) {
      return this.stringInstruction.run(scope, node, options);
    }

    if (node instanceof StructureNode) {
      return this.structureInstruction.run(scope, node, options);
    }

    if (node instanceof TakeFileNode) {
      return this.takeFileInstruction.run(scope, node, options);
    }

    if (node instanceof TakeModuleNode) {
      return this.takeModuleInstruction.run(scope, node, options);
    }

    if (node instanceof TakePakNode) {
      return this.takePakInstruction.run(scope, node, options);
    }

    if (node instanceof TakeRemoteNode) {
      return this.takeRemoteInstruction.run(scope, node, options);
    }

    if (node instanceof TernaryNode) {
      return this.ternaryInstruction.run(scope, node, options);
    }

    if (node instanceof TestNode) {
      return this.testInstruction.run(scope, node, options);
    }

    if (node instanceof ThrowNode) {
      return this.throwInstruction.run(scope, node, options);
    }

    if (node instanceof TryNode) {
      return this.tryInstruction.run(scope, node, options);
    }

    if (node instanceof TypeValueNode) {
      return this.typeValueInstruction.run(scope, node, options);
    }

    if (node instanceof WaitNode) {
      return this.waitInstruction.run(scope, node, options);
    }

    if (node instanceof WhileNode) {
      return this.whileInstruction.run(scope, node, options);
    }

    if (node instanceof ProgramNode) {
      throw "ProgramNode is not supported";
    }
  }

  /**
   * @param {string} code
   * @returns {string}
   */
  compile(code) {
    const ast = parse(code);

    const scope = new Scope();

    for (const node of ast.body) {
      this.compileNode(scope, node);
    }
  }
}

export default MavkaCompiler;

