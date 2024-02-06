const minFallingPathSum = (matrix) => {
    const n = matrix.length;
    const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
    for (let i = 0; i < n; i++) {
        dp[0][i] = matrix[0][i];
    }
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j - 1] || Infinity, dp[i - 1][j + 1] || Infinity);
        }
    }
    return Math.min(...dp[n - 1]);
}
console.log(minFallingPathSum([[2, 1, 3], [6, 5, 4], [7, 8, 9]])); // 13
console.log(minFallingPathSum([[-19, 57], [-40, -5]])); // -59
console.log(minFallingPathSum([[-48]])); // -48
console.log(minFallingPathSum([[100, -42, -46, -41], [31, 97, 10, -10], [-58, -51, 82, 89], [51, 81, 69, -51]])); // -36
console.log(minFallingPathSum([[51, 24], [-50, 82]])); // -26
console.log(minFallingPathSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // 13
console.log(minFallingPathSum([[1]])); // 1
console.log(minFallingPathSum([[1, 2], [3, 4]])); // 4

// Time Complexity: O(n^2)
// Space Complexity: O(n^2)
// ✅ Hints: Minimum Falling Path Sum 