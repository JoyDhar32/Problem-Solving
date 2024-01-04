/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    // Step 1: Find the maximum number of candies
    const maxCandies = Math.max(...candies);
    
    // Step 2: Check if each kid can have the greatest number of candies
    const result = candies.map(candy => candy + extraCandies >= maxCandies);

    // Step 3: Return the boolean array
    return result;
};

// Example usage:
const example1 = [2,3,5,1,3];
const extraCandies1 = 3;

const example2 = [4,2,1,1,2];
const extraCandies2 = 1;

const example3 = [12,1,12];
const extraCandies3 = 10;

console.log(kidsWithCandies(example1, extraCandies1)); // Output: [true,true,true,false,true]
console.log(kidsWithCandies(example2, extraCandies2)); // Output: [true,false,false,false,false]
console.log(kidsWithCandies(example3, extraCandies3)); // Output: [true,false,true]

// Time Complexity: O(n)
// Space Complexity: O(n)
// ✅
