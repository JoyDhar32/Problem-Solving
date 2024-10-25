const smallestRangeI = (nums, k) => {
    nums.sort((a, b) => a - b);
    let min = nums[0];
    let max = nums[nums.length - 1];
    if ((max - k) <= (min + k)) return 0;
    else return ((max - k) - (min + k));
};

console.log(smallestRangeI([1], 0));//0
console.log(smallestRangeI([0, 10], 2));//6
console.log(smallestRangeI([1, 3, 6], 3));//0

// Time Complexity: O(nlogn)
// Space Complexity: O(1) because we are not using any extra space to store the result
//✅ Hints: use the sort method to sort the array in ascending order