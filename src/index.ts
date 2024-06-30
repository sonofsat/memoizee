import { Command } from 'commander';
import memoize from './memoize';

const program = new Command();

function fibonacci(n: number): number {
    if (n <= 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);

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
