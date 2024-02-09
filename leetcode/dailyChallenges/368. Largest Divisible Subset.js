const largestDivisibleSubset = (nums) => {
    nums.sort((a, b) => a - b);
    const dp = new Array(nums.length).fill(1);
    let max = 1;
    let maxIndex = 0;
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
        if (nums[i] % nums[j] === 0) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
            if (dp[i] > max) {
            max = dp[i];
            maxIndex = i;
            }
        }
        }
    }

    const result = [];
    let prev = nums[maxIndex];
    for (let i = maxIndex; i >= 0; i--) {
        if (prev % nums[i] === 0 && dp[i] === max) {
        result.push(nums[i]);
        prev = nums[i];
        max--;
        }
    }
    
    return result;
    };
console.log(largestDivisibleSubset([1,2,3])); //[1,2] or [1,3]
console.log(largestDivisibleSubset([1,2,4,8])); //[1,2,4,8]
console.log(largestDivisibleSubset([4,8,10,240])); //[4,8,240]

// Time Complexity: O(n^2)
// Space Complexity: O(n)
// ✅ Hint: Dynamic Programming (Bottom-Up)

