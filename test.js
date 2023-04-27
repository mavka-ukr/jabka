import MavkaCompiler from "./src/main.js";

const code = `
а = 1

друк(а)
`.trim();

const compiler = new MavkaCompiler();

const result = compiler.compile(code);

console.log(result);
