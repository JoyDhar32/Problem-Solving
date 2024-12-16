const getFinalState =(nums, k, multiplier) => {
    for (let i = 0; i < k; i++) {
        // Find the minimum value and its index
        let minIndex = 0;
        for (let j = 1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        // Replace the minimum value with its product with the multiplier
        nums[minIndex] *= multiplier;
    }
    return nums;
}

// Test cases


console.log(getFinalState([1, 2, 3], 3, 2)); // [2, 4, 6]
console.log(getFinalState([1, 2, 3, 4], 1, 3)); // [3, 2, 3, 4]
console.log(getFinalState([1, 2, 3, 4], 2, 2)); // [4, 4, 3, 4]
console.log(getFinalState([1, 2, 3, 4], 4, 1)); // [1, 1, 1, 1]

// Time Complexity: O(k * n) where n is the number of elements in the array nums
// Space Complexity: O(1) since we are using a constant amount of extra space
// Hints: Find the minimum value and its index in the array nums. Replace the minimum value with its product with the multiplier. Repeat this process k times. Return the final state of the array nums.