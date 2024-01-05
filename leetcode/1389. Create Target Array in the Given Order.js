/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    const target = [];

    for (let i = 0; i < nums.length; i++) {
        if (index[i] === target.length) {
            // If the current index is equal to the length of the target array,
            // we can simply push the element to the end.
            target.push(nums[i]);
        } else {
            // If the current index is not equal to the length, we need to insert
            // the element at the specified position without using splice.
            target.splice(index[i], 0, nums[i]);
        }
    }

    return target;
};

// Example usage:
const example1 = { nums: [0,1,2,3,4], index: [0,1,2,2,1] };
const example2 = { nums: [1,2,3,4,0], index: [0,1,2,3,0] };
const example3 = { nums: [1], index: [0] };

console.log(createTargetArray(example1.nums, example1.index)); // Output: [0,4,1,3,2]
console.log(createTargetArray(example2.nums, example2.index)); // Output: [0,1,2,3,4]
console.log(createTargetArray(example3.nums, example3.index)); // Output: [1]

// time complexity: O(n^2)
// space complexity: O(n)
// ✅ Beats 54.97%of users with JavaScript
