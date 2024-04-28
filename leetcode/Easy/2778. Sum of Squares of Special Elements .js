const sumOfSquares = (nums) => {
    let sum = 0;
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        if (length % (i + 1) == 0) {
            sum += nums[i] * nums[i];
        }
    }
    return sum;
}
console.log(sumOfSquares([1, 2, 3, 4,])); // 220
console.log(sumOfSquares([2, 7, 1, 19, 18, 3])); // 165
console.log(sumOfSquares([2, 4, 6, 8, 10])); // 220
console.log(sumOfSquares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 220
console.log(sumOfSquares([1, 3, 5, 7, 9])); // 165

// time complexity: O(n)
// space complexity: O(1)

// ✅ Hint: length % (i + 1) == 0 means that i + 1 is a factor of length. If i + 1 is a factor of length, then the ith element is a special element. Add the square of the ith element to the sum. Finally, return the sum.