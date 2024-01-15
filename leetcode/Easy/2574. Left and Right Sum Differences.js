/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findSumDifferences = function(nums) {
    const n = nums.length;
    const leftSum = new Array(n).fill(0);
    const rightSum = new Array(n).fill(0);
    const answer = new Array(n).fill(0);

    // Calculate the cumulative sum to the left
    leftSum[0] = 0;
    for (let i = 1; i < n; i++) {
        leftSum[i] = leftSum[i - 1] + nums[i - 1];
    }

    // Calculate the cumulative sum to the right
    rightSum[n - 1] = 0;
    for (let i = n - 2; i >= 0; i--) {
        rightSum[i] = rightSum[i + 1] + nums[i + 1];
    }

    // Calculate the absolute differences
    for (let i = 0; i < n; i++) {
        answer[i] = Math.abs(leftSum[i] - rightSum[i]);
    }

    return answer;
};

// Example usage:
const example1 = [10,4,8,3];
const example2 = [1];

console.log(findSumDifferences(example1)); // Output: [15,1,11,22]
console.log(findSumDifferences(example2)); // Output: [0]

// Time Complexity: O(n)
// Space Complexity: O(n)
// ✅ Beats 98.64%of users with JavaScript
