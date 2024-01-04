/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;

    for (let i = 0; i < accounts.length; i++) {
        // Calculate the wealth of the current customer
        let currentWealth = accounts[i].reduce((acc, amount) => acc + amount, 0);
        
        // Update maxWealth if the current customer's wealth is greater
        maxWealth = Math.max(maxWealth, currentWealth);
    }

    return maxWealth;
};

// Example usage:
const example1 = [[1,2,3],[3,2,1]];
const example2 = [[1,5],[7,3],[3,5]];
const example3 = [[2,8,7],[7,1,3],[1,9,5]];

console.log(maximumWealth(example1)); // Output: 6
console.log(maximumWealth(example2)); // Output: 10
console.log(maximumWealth(example3)); // Output: 17

// Time Complexity: O(n^2)
// Space Complexity: O(1)

// ✅
