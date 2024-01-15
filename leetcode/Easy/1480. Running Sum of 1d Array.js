const runningSum = (nums) => {
    const result = [];
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        result.push(sum);
    }

    return result;
};

console.log(runningSum([1,2,3,4])); // Output: [1,3,6,10]
console.log(runningSum([1,1,1,1,1])); // Output: [1,2,3,4,5]
console.log(runningSum([3,1,2,10,1])); // Output: [3,4,6,16,17]

// Time Complexity: O(n)
// Space Complexity: O(n)
// ✅ Beat 95.66% of Leetcode submissions