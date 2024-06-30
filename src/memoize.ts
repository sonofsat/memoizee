type AnyFunction = (...args: any[]) => any;

export default function memoize<T extends AnyFunction>(fn: T): T {
    const cache: Record<string, ReturnType<T>> = {};
    return function (this: any, ...args: Parameters<T>): ReturnType<T> {
        const key = JSON.stringify(args);
        if (!(key in cache)) {
            cache[key] = fn.apply(this, args);
        }
        return cache[key];
    } as T;
}