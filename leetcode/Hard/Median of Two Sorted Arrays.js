var findMedianSortedArrays = function (nums1, nums2) {
    let result = [];
    if (nums1.length >= 1 && nums2.length >= 1) {
        result = [...nums1, ...nums2]
    }
    else {
        if (nums1.length === 0) result = [...nums2];
        else if (nums2.length === 0) result = [...nums1];
    }
    result = result.sort((a, b) => a - b);
    let len = result.length;
    if (len % 2 === 1) {
        return result[(len - 1) / 2];
    }
    else {
        return ((result[(len / 2) - 1] + result[(len / 2)]) / 2);
    }
};

console.log(findMedianSortedArrays([1, 3], [2])) // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])) // 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0])) // 0

// Time Complexity: O(n log n)
// Space Complexity: O(n)

// ✅ Hints: Merging the two arrays and sorting them to find the median