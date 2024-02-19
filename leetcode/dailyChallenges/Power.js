const isPowerOfTwo = (n) => {
    return n > 0 && (n & (n - 1)) === 0;
};

console.log(isPowerOfTwo(1)); // Output: true
console.log(isPowerOfTwo(16)); // Output: true
console.log(isPowerOfTwo(3)); // Output: false

// Time complexity is O(1)
// Space complexity is O(1)
// ✅  using bitwise operation to solve the problem