const largestOddNumber = (num) => {
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] % 2 !== 0) {
            return num.substring(0, i + 1);
        }
    }
    return '';
};

// Test cases
console.log(largestOddNumber('52')); // '5'
console.log(largestOddNumber('4206')); // ''
console.log(largestOddNumber('35427')); // '35427'

// Time Complexity: O(n) where n is the length of the input string num
// Space Complexity: O(1) since we are using a constant amount of space

// ✅ Hints: The key is to iterate through the string from right to left and return the substring from the beginning of the string to the current index if the digit at the current index is odd. If no odd digit is found, return an empty string.