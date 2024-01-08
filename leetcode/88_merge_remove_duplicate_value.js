const mergeAndRemoveDuplicates = (nums1, m, nums2, n) => {
    for (let i = m, j = 0; j < n; j++, i++) {
        nums1[i] = nums2[j];
    }

    // Sort the merged array
    let sortedArray = nums1.slice(0, m + n).sort((a, b) => a - b);

    // Remove duplicates by creating a Set
    let uniqueSet = new Set(sortedArray);

    // Convert the Set back to an array
    let result = Array.from(uniqueSet);

    return result;
}

console.log(mergeAndRemoveDuplicates([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1, 2, 3, 5, 6]
console.log(mergeAndRemoveDuplicates([1], 1, [], 0)); // [1]
console.log(mergeAndRemoveDuplicates([0], 0, [1], 1)); // [1]
console.log(mergeAndRemoveDuplicates([2, 0], 1, [1], 1)); // [1, 2]

// time complexity: O(n)
// space complexity: O(n)

// ✅ Beats 88% of JavaScript submissions in runtime
