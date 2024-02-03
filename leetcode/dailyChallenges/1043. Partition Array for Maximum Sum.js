const maxSumAfterPartitioning = (arr, k) =>{
    let n = arr.length;
    let dp = new Array(n+1).fill(0);
    for(let i=1; i<=n; i++){
        let max = 0;
        for(let j=1; j<=k && i-j>=0; j++){
            max = Math.max(max, arr[i-j]);
            dp[i] = Math.max(dp[i], dp[i-j]+max*j);
        }
    }
    return dp[n];
}
console.log(maxSumAfterPartitioning([1,15,7,9,2,5,10], 3)); // 84
console.log(maxSumAfterPartitioning([1,4,1,5,7,3,6,1,9,9,3], 4)); // 83
console.log(maxSumAfterPartitioning([1,4,1,5,7,3,6,1,9,9,3], 3)); // 83