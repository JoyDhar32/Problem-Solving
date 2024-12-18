const findMin = (nums) => {
    let low = 0;
    let high = nums.length - 1;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (nums[mid] < nums[high]) high = mid;
        else low = mid + 1;
    }
    return nums[low];
};

// Test cases
console.log(findMin([3, 4, 5, 1, 2])); // 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0
console.log(findMin([11, 13, 15, 17])); // 11

// Time Complexity: O(log n) where n is the number of elements in the array nums due to binary search
// Space Complexity: O(1) as we are using constant space
// ✅ Hints: Use binary search to find the minimum element in the rotated sorted array. Update the low and high pointers based on the comparison of the mid element with the high element. Return the minimum element when the low and high pointers converge.