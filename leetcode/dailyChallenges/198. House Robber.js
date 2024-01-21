const rob = (nums) => {
    let dp = [];
    dp[0] = 0;
    dp[1] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i]);
    }
    return dp[nums.length];
}
console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([2, 7, 9, 3, 1])); // 12
console.log(rob([2, 1, 1, 2])); // 4

// ✅ Hints: Using Dynamic Programming