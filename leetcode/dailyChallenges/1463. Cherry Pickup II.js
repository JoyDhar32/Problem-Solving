const cherryPickup = (grid) => {
    const n = grid.length;
    const m = grid[0].length;
    const dp = new Array(n).fill(null).map(() => new Array(m).fill(null).map(() => new Array(m).fill(-1)));
    return dfs(0, 0, m - 1, grid, dp);
}

const dfs = (row, col1, col2, grid, dp) => {
    if (row === grid.length) return 0;
    if (dp[row][col1][col2] !== -1) return dp[row][col1][col2];
    let result = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            const newCol1 = col1 + i;
            const newCol2 = col2 + j;
            if (newCol1 >= 0 && newCol1 < grid[0].length && newCol2 >= 0 && newCol2 < grid[0].length) {
                result = Math.max(result, dfs(row + 1, newCol1, newCol2, grid, dp));
            }
        }
    }
    const cherries = col1 === col2 ? grid[row][col1] : grid[row][col1] + grid[row][col2];
    return dp[row][col1][col2] = result + cherries;
}

console.log(cherryPickup([[0, 1, -1], [1, 0, -1], [1, 1, 1]])); // 5
console.log(cherryPickup([[1, 1, -1], [1, -1, 1], [-1, 1, 1]])); // 0
console.log(cherryPickup([[1]])); // 1

// Time Complexity: O(n^3)
// Space Complexity: O(n^3)
//✅ Hint: Dynamic Programming