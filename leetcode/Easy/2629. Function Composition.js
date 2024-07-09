var compose = function (functions) {

    return function (x) {
        let output = x; // Initialize output to x
        let len = functions.length - 1; // Get the length of the functions array
        for (let i = len; i >= 0; i--) { // Loop through the functions array
            output = functions[i](output); // Apply the function to the output and update the output with the result of the function
        }
        return output;
    }
};

// Test cases
const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4));
const fn2 = compose([x => x + 1, x => 2 * x, x => x / 2])
console.log(fn2(4));

// Time complexity: O(n)
// Space complexity: O(1)
// ✅ Hint: Loop through the functions array in reverse order and apply each function to the output

