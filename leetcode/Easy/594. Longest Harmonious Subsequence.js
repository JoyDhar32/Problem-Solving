const findLHS = (nums) => {
    const freq = {};
    for (const num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }
    let max = 0;
    for (const num of nums) {
        if (freq[num + 1]) {
            max = Math.max(max, freq[num] + freq[num + 1]);
        }
    }
    return max;
};

// Test cases
console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7])); // 5
console.log(findLHS([1, 2, 3, 4])); // 2
console.log(findLHS([1, 1, 1, 1])); // 0

// Time Complexity: O(n) where n is the number of elements in the array nums
// Space Complexity: O(n) where n is the number of elements in the array nums
// ✅ Hints: Use a hash map to store the frequency of each element in the array. Iterate the array and check if the frequency of the current element and the next element is greater than 0. Update the maximum length if the condition is satisfied. Return the maximum length after the loop completes.