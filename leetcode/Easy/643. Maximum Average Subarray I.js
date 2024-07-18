const findMaxAverage = (nums, k) => {
    let len = nums.length; // Get the length of the array
    if (len < k) return 0; // If the length of the array is less than k, return 0
    let maxAverage = 0; // Initialize the maxAverage variable to 0
    for (let i = 0; i < k; i++) { // Iterate through the array and calculate the sum of the first k elements
        maxAverage += nums[i]; // Update the maxAverage variable with the sum of the first k elements
    }
    let sum = maxAverage; // Initialize the sum variable with the maxAverage variable
    for (let i = k; i < len; i++) { // Iterate through the array starting from the kth element
        sum += nums[i] - nums[i - k]; // Update the sum variable by adding the current element and subtracting the element k positions behind the current element
        maxAverage = Math.max(maxAverage, sum); // Update the maxAverage variable with the maximum value between the maxAverage and sum variables
    }
    return maxAverage / k; // Return the maxAverage divided by k to get the maximum average
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));//12.75
console.log(findMaxAverage([5], 1));//5
console.log(findMaxAverage([0, 4, 0, 3, 2], 1));//4

// Time Complexity: O(n). Single pass.
// Space Complexity: O(1). Constant space required.
// ✅ Hints: Basic Sliding Window