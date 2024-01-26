const findPaths = (m,n,maxMove,startRow,startColumn) => {
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0).map(() => new Array(maxMove+1).fill(0)));
    let mod = 1e9 + 7;
    let dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    for(let move = 1; move <= maxMove; move++) {
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                for(let dir of dirs) {
                    let x = i + dir[0];
                    let y = j + dir[1];
                    if(x < 0 || x >= m || y < 0 || y >= n) {
                        dp[i][j][move] += 1;
                    } else {
                        dp[i][j][move] = (dp[i][j][move] + dp[x][y][move-1]) % mod;
                    }
                }
            }
        }
    }
    return dp[startRow][startColumn][maxMove];
};
console.log(findPaths(2,2,2,0,0)); // 6
console.log(findPaths(1,3,3,0,1)); // 12
console.log(findPaths(7,6,13,0,2)); // 381

// time complexity: O(m*n*maxMove)
// space complexity: O(m*n*maxMove)
// ✅ Using Dynamic Programming