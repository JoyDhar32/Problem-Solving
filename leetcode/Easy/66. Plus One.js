function plusOne(digits) {
    // Start from the rightmost digit
    let i = digits.length - 1;

    // Iterate from right to left
    while (i >= 0) {
        // Increment the current digit
        digits[i]++;

        // Check if there's a carry
        if (digits[i] > 9) {
            // Set the current digit to 0 and continue with the next digit
            digits[i] = 0;
            i--;
        } else {
            // No carry, break the loop
            break;
        }
    }

    // If there's still a carry after the loop, insert a new digit at the beginning
    if (digits[0] === 0) {
        digits.unshift(1);
    }

    return digits;
}

// Example usage:
const result1 = plusOne([1, 2, 3]);
console.log(result1); // Output: [1, 2, 4]

const result2 = plusOne([4, 3, 2, 1]);
console.log(result2); // Output: [4, 3, 2, 2]

const result3 = plusOne([9]);
console.log(result3); // Output: [1, 0]

// time complexity: O(n)
// space complexity: O(1)
// ✅ Hint: Start from the rightmost digit and increment it by 1. If there's a carry, set the current digit to 0 and continue with the next digit. If there's still a carry after the loop, insert a new digit at the beginning.

// ✅ Beats 100% of JavaScript submissions in runtime