const intersaction = (nums1, nums2) => {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let result = [];
    for (let item of set1) {
        if (set2.has(item)) {
            result.push(item);
        }
    }
    return result;
}
console.log(intersaction([1, 2, 2, 1], [2, 2]));//[2]
console.log(intersaction([4, 9, 5], [9, 4, 9, 8, 4]));//[9,4]

// time complexity: O(n)
// space complexity: O(n)
// ✅Hints Array, Set