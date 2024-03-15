const productExceptSelf = (nums) => {
    let result = [];
    let left = 1;
    let right = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = left;
        left *= nums[i];
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }
    return result;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]

// Time Complexity: O(n)
// Space Complexity: O(1)
// ✅ Hint: Using two pointers