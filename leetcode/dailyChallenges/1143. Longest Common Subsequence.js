const longestComonSubsequence = (text1, text2) => {
    const dp = new Array(text1.length + 1).fill(0).map(() => new Array(text2.length + 1).fill(0));
    
    for (let i = 1; i <= text1.length; i += 1) {
        for (let j = 1; j <= text2.length; j += 1) {
        if (text1[i - 1] === text2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
        else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    
    return dp[text1.length][text2.length];
    };
console.log(longestComonSubsequence('abcde', 'ace')); // 3
console.log(longestComonSubsequence('abc', 'abc')); // 3
console.log(longestComonSubsequence('abc', 'def')); // 0

// // // time complexity: O(N)
// // // space complexity: O(N)
// // // ✅ Using Dynamic Programming