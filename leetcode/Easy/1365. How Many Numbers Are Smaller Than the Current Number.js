/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        let count = 0;

        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[j] < nums[i]) {
                count++;
            }
        }

        result.push(count);
    }

    return result;
};

// Example usage:
const example1 = [8,1,2,2,3];
const example2 = [6,5,4,8];
const example3 = [7,7,7,7];

console.log(smallerNumbersThanCurrent(example1)); // Output: [4,0,1,1,3]
console.log(smallerNumbersThanCurrent(example2)); // Output: [2,1,0,3]
console.log(smallerNumbersThanCurrent(example3)); // Output: [0,0,0,0]

// Time Complexity: O(n^2)
// Space Complexity: O(n)

// ✅ Beats 92.78% of JavaScript submissions in runtime