const dominatIndx = (nums) => {
    let max = Math.max(...nums);
    let maxIndex = nums.indexOf(max);
    for (let i = 0; i < nums.length; i++) {
        if (i !== maxIndex && max < nums[i] * 2) {
            return -1;
        }
    }
    return maxIndex;
}

console.log(dominatIndx([3, 6, 1, 0])); // 1
console.log(dominatIndx([1, 2, 3, 4])); // -1

// Time Complexity: O(n)
// Space Complexity: O(1)
// ✅ Hints: find the max number and its index, then loop through the array and check if the max number is less than 2 times the current number.