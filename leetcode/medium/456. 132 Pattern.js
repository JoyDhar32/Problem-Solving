const find132pattern = (nums) => {
    const n = nums.length;
    const stack = [];
    let mid = -Infinity;
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] < mid) return true;
        while (stack.length && stack[stack.length - 1] < nums[i]) mid = stack.pop();
        stack.push(nums[i]);
    }
    return false;
};

// Test cases
console.log(find132pattern([1, 2, 3, 4])); // false
console.log(find132pattern([3, 1, 4, 2])); // true
console.log(find132pattern([-1, 3, 2, 0])); // true

// Time Complexity: O(n) where n is the number of elements in the array nums
// Space Complexity: O(n) where n is the number of elements in the array nums
// ✅ Hints: Use a stack to keep track of the elements in the array. Iterate the array from right to left and update the mid element when the current element is less than the mid element. Pop the elements from the stack until the top element is less than the current element. Push the current element into the stack. Return true if the mid element is less than the current element. Return false if the loop completes without finding the 132 pattern.