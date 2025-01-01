const maxScore = (s) => {
    let max = 0;
    let zeros = 0;
    let ones = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') ones++;
    }
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '0') zeros++;
        else ones--;
        max = Math.max(max, zeros + ones);
    }
    return max;
    };

// Test cases
console.log(maxScore('011101')); // 5
console.log(maxScore('00111')); // 5
console.log(maxScore('1111')); // 3
console.log(maxScore('00')); // 1

// Time Complexity: O(n) where n is the number of elements in the array s
// Space Complexity: O(1)
// ✅ Hints: Count the number of zeros and ones in the array s. Iterate the array s and calculate the maximum score for each split. Return the maximum score.