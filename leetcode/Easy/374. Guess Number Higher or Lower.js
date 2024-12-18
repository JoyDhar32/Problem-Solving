const guessNumber = (n)=> {
    let low = 1;
    let high = n;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const res = guess(mid); // The guess function is provided by the problem statement and returns -1, 0, or 1 API
        if (res === 0) return mid;
        if (res === -1) high = mid - 1; // The number is lower than the guess so we move the high pointer
        else low = mid + 1;
    }
    return -1;
};

// Test cases
console.log(guessNumber(10)); // 6
console.log(guessNumber(1)); // 1
console.log(guessNumber(100)); // 6
console.log(guessNumber(1000)); // 6

// Time Complexity: O(log n) where n is the number of elements in the array due to binary search
// Space Complexity: O(1) as we are using constant space
// ✅ Hints: Use binary search to find the target number. Update the low and high pointers based on the result of the guess function. Return the number when the guess function returns 0.