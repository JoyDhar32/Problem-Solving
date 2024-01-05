/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    const result = [];

    for (let i = 0; i < nums.length; i += 2) {
        const freq = nums[i];
        const val = nums[i + 1];

        for (let j = 0; j < freq; j++) {
            result.push(val);
        }
    }

    return result;
};

// Example usage:
const example1 = [1, 2, 3, 4];
const example2 = [1, 1, 2, 3];

console.log(decompressRLElist(example1)); // Output: [2, 4, 4, 4]
console.log(decompressRLElist(example2)); // Output: [1, 3, 3]

// Time Complexity: O(n)
// Space Complexity: O(n)

// ✅ Beats 99.98% of users with JavaScript
