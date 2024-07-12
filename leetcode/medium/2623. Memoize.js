const memoize = (fn) => {
    let output = {};
    return function (...args) {
        if (args in output) {
            return output[args];
        } else {
            output[args] = fn(...args);
            return output[args];
        }
    }
}
const add = (a, b) => a + b;
const memoizedAdd = memoize(add);

// Time Complexity: O(1)
// Space Complexity: O(n)
// ✅ Hint: Use an object to store the results of the function calls