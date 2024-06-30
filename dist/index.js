"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const memoize_1 = __importDefault(require("./memoize"));
const program = new commander_1.Command();
function fibonacci(n) {
    if (n <= 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
const memoizedFibonacci = (0, memoize_1.default)(fibonacci);
program
    .version('1.0.0')
    .description('CLI to test memoized Fibonacci function')
    .option('-n, --number <number>', 'Number to calculate Fibonacci for', '10')
    .action((options) => {
    const num = parseInt(options.number, 10);
    if (isNaN(num)) {
        console.error('Please provide a valid number.');
        process.exit(1);
    }
    console.log(`Fibonacci(${num}) = ${memoizedFibonacci(num)}`);
});
program.parse(process.argv);
