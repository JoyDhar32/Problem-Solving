const findMedianSortedArrays = (nums1, nums2) => {
    let merged = nums1.concat(nums2).sort((a, b) => a - b);
    let mid = Math.floor(merged.length / 2);
    return merged.length % 2 === 0 ? (merged[mid] + merged[mid - 1]) / 2 : merged[mid];
};

// Test cases
console.log(findMedianSortedArrays([1, 3], [2])); // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0])); // 0
console.log(findMedianSortedArrays([], [1])); // 1
console.log(findMedianSortedArrays([1,2,22,33], [11,22,33])); // 22

// Time Complexity: O(n log n)
// Space Complexity: O(n)

// ✅ Hints: Merging the two arrays and sorting them to find the median

