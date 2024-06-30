"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const memoize_1 = __importDefault(require("./memoize"));
describe('memoize', () => {
    it('should memoize the fibonacci function', () => {
        const fibonacci = (n) => {
            if (n <= 2)
                return 1;
            return fibonacci(n - 1) + fibonacci(n - 2);
        };
        const memoizedFibonacci = (0, memoize_1.default)(fibonacci);
        expect(memoizedFibonacci(10)).toBe(55);
        expect(memoizedFibonacci(10)).toBe(55);
    });
});
