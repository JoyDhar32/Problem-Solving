const numSubmatrixSumTarget = (matrix, target) => {
    const m = matrix.length;
    const n = matrix[0].length;
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    let count = 0;
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++)
        dp[i][j] =
            dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + matrix[i - 1][j - 1];
    }
    
    for (let i = 1; i <= m; i++) {
        for (let j = i; j <= m; j++) {
        const map = new Map();
        map.set(0, 1);
    
        for (let k = 1; k <= n; k++) {
            const sum = dp[j][k] - dp[i - 1][k];
            count += map.get(sum - target) || 0;
            map.set(sum, (map.get(sum) || 0) + 1);
        }
        }
    }
    
    return count;
    }

console.log(numSubmatrixSumTarget([[0,1,0],[1,1,1],[0,1,0]], 0)); // 4
console.log(numSubmatrixSumTarget([[1,-1],[-1,1]], 0)); // 5