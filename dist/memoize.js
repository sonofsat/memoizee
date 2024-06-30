"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = memoize;
function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (!(key in cache)) {
            cache[key] = fn.apply(this, args);
        }
        return cache[key];
    };
}
