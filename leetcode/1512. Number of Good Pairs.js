function numIdenticalPairs(nums) {
    let count = 0;
    const occurrences = {};

    for (const num of nums) {
        count += occurrences[num] || 0;
        occurrences[num] = (occurrences[num] || 0) + 1;
    }

    return count;
}
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // Output: 4
console.log(numIdenticalPairs([1, 1, 1, 1])); // Output: 6
console.log(numIdenticalPairs([1, 2, 3])); // Output: 0
// Time Complexity: O(n)
// Space Complexity: O(n)
// ✅ Beat 98.22% of Leetcode submissions

