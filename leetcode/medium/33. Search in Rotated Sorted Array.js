const search = (nums, target) => {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) return mid;
        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target < nums[mid]) high = mid - 1;
            else low = mid + 1;
        } else {
            if (nums[mid] < target && target <= nums[high]) low = mid + 1;
            else high = mid - 1;
        }
    }
    return -1;
};

// Test cases
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search([1], 0)); // -1

// Time Complexity: O(log n) where n is the number of elements in the array nums due to binary search
// Space Complexity: O(1) as we are using constant space
// ✅ Hints: Use binary search to find the target number. Update the low and high pointers based on the rotated sorted array. Return the index when the target is found. Return -1 if the target is not present in the array.  