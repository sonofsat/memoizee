import memoize from './memoize';

describe('memoize', () => {
    it('should memoize the fibonacci function', () => {
        const fibonacci = (n: number): number => {
            if (n <= 2) return 1;
            return fibonacci(n - 1) + fibonacci(n - 2);
        };
        const memoizedFibonacci = memoize(fibonacci);
        
        expect(memoizedFibonacci(10)).toBe(55);
        expect(memoizedFibonacci(10)).toBe(55); 
    
    });
});