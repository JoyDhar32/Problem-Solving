const subsetXORSum = (nums) => {
    let sum = 0;
    const dfs = (index, xor) => {
        if (index === nums.length) {
            sum += xor;
            return;
        }
        dfs(index + 1, xor ^ nums[index]);
        dfs(index + 1, xor);
    }
    dfs(0, 0);
    return sum;
}

console.log(subsetXORSum([1, 3]));//6
console.log(subsetXORSum([5, 1, 6]));//28

// Time Complexity: O(2^n)
// Space Complexity: O(n) because of the recursive call stack
// ✅ This is a Backtracking problem