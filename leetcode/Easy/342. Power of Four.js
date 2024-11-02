const isPowerOfFour = (n) => {
    if (n < 1) return false;
    while (n % 4 === 0) {
        n /= 4;
    }
    return n === 1;
};

console.log(isPowerOfFour(16)); //true
console.log(isPowerOfFour(5)); //false
console.log(isPowerOfFour(1)); //true
console.log(isPowerOfFour(0)); //false

// Time Complexity: O(log n) where n is the input nber
// Space Complexity: O(1) because we are using a constant amount of space
//✅ Hints: Keep dividing the nber by 4 until it becomes 1. If the nber is a power of 4, it will eventually become 1. Otherwise, it will not be a power of 4.