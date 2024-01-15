/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var countTriplets = function(nums, diff) {
    const countMap = new Map();
    const tripletCountMap = new Map();
    let result = 0;

    for (let num of nums) {
        const prev = num - diff;
        const next = num + diff;

        if (countMap.has(prev)) {
            result += countMap.get(prev);
        }

        if (tripletCountMap.has(prev)) {
            countMap.set(num, (countMap.get(num) || 0) + tripletCountMap.get(prev));
        }

        tripletCountMap.set(num, (tripletCountMap.get(num) || 0) + 1);
    }

    return result;
};

// Example usage:
const example1 = [0, 1, 4, 6, 7, 10];
const diff1 = 3;
console.log(countTriplets(example1, diff1)); // Output: 2

const example2 = [4, 5, 6, 7, 8, 9];
const diff2 = 2;
console.log(countTriplets(example2, diff2)); // Output: 2


// time complexity: O(n)
// space complexity: O(n)

// ✅ Beats 75.88%of users with JavaScript
