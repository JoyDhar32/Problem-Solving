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

/*
The Problem is to determine if you are able to reach the last index of the array.
The idea is to iterate through the array and update the maximum index that can be reached. 
If the current index is greater than the maximum index, it means we can't reach the end of the array.

Example:
[2, 3, 1, 1, 4] => true 

Index 0: 
The first element is 2, so we can jump to the second element.
max = Math.max(0, 0 + 2) = 2
We can reach up to index 2 from here.


Index 1:
max = Math.max(2, 1 + 3) = 4
We can reach up to index 4 from here.

*/