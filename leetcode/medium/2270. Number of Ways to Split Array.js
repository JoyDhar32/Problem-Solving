const waysToSplitArray = (nums) => {
    const n = nums.length;
    const prefixSum = new Array(n).fill(0);
    prefixSum[0] = nums[0];

    // Step 1: Create the prefix sum array
    for (let i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i];
    }

    let totalSum = prefixSum[n - 1];
    let count = 0;

    // Step 2: Iterate through the array and compare sums
    for (let i = 0; i < n - 1; i++) {
        let leftSum = prefixSum[i];
        let rightSum = totalSum - leftSum;
        if (leftSum >= rightSum) {
            count++;
        }
    }

    return count;
};

// Test cases
console.log(waysToSplitArray([10, 4, -8, 7])); // 2
console.log(waysToSplitArray([2, 3, 1, 0])); // 2

// Time Complexity: O(n) where n is the length of the input array
// Space Complexity: O(n) for the prefix sum array

// ✅ Hints: Create a prefix sum array to store the cumulative sum of the input array. Iterate through the array and compare the left and right sums. Increment the count if the left sum is greater than or equal to the right sum. Return the count.