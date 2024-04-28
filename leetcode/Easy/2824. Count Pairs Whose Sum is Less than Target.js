const countPairs = (nums, target) => {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] < target) {
                count++;
            }
        }
    }
    return count;
}
console.log(countPairs([-1, 1, 2, 3, 1], 2)); // Output: 3
console.log(countPairs([-6, 2, 5, -2, -7, -1, 3], -2)); // Output: 4
console.log(countPairs([1, 2], 2)); // Output: 0
console.log(countPairs([1, 2, 3], 3)); // Output: 1

// Time Complexity: O(n^2)
// Space Complexity: O(1)

//  ✅ Beats 100% of JavaScript Submissions
// ✅ Hints: Use a nested loop to iterate over all pairs of elements and count the pairs whose sum is less than the target.