const minPairSum = (nums) => {
    nums.sort((a, b) => a - b);
    let max = 0;
    for (let i = 0, j = nums.length - 1; i < j; i++, j--) {
        max = Math.max(max, nums[i] + nums[j]);
    }
    return max;
};

console.log(minPairSum([3, 5, 2, 3])); // 7
console.log(minPairSum([3, 5, 4, 2, 4])); // 8
console.log(minPairSum([3, 5, 2, 3, 4, 1])); // 8

// time complexity: O(n log n)
// space complexity: O(1)
// ✅ Hints: sort the array and pair the smallest number with the largest number, then calculate the maximum sum