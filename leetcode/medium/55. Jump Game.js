const canJump = (nums) => {
    let max = 0;
    for (let i = 0; i < nums.length; i++) { // i < nums.length - 1 is also correct but i < nums.length is more readable 
        if (i > max) return false; // if i is greater than max, it means we can't reach the end of the array
        max = Math.max(max, i + nums[i]); // update max with the maximum value between max and i + nums[i] 
    }
    return true;
}
// Test case:
console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([0])); // true


// Time Complexity: O(n)
// Space Complexity: O(1)
// ✅ Hints: Greedy Algorithm