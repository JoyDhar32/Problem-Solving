const numSquares =(n)=>{
    let dp = new Array(n+1).fill(Infinity);
    dp[0]=0;
    for(let i=1;i<=n;i++){
        for(let j=1;j*j<=i;j++){
            dp[i] = Math.min(dp[i],dp[i-j*j]+1);
        }
    }
    return dp[n];
    
}
console.log(numSquares(12)); //3
console.log(numSquares(13)); //2
console.log(numSquares(16)); //4
console.log(numSquares(17)); //3

// Time Complexity: O(n*sqrt(n))
// Space Complexity: O(n)
// ✅ Hint: Dynamic Programming (Bottom-Up)
// ✅ Hint: Using Math.min and Math.max
/*
What is Dynamic Programming:
- Dynamic Programming is a method for solving a complex problem by breaking it down into simpler subproblems.
- It involves storing the results of expensive function calls and returning the cached result when the same inputs occur again.

*/