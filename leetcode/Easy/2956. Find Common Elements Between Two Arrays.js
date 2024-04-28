const findIntersectionValues = (nums1, nums2) => {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    let commonInNums2 = 0;
    let commonInNums1 = 0;

    for (const num of nums1) {
        if (set2.has(num)) {
            commonInNums2++;
        }
    }

    for (const num of nums2) {
        if (set1.has(num)) {
            commonInNums1++;
        }
    }

    return [commonInNums2, commonInNums1];

}
console.log(findIntersectionValues([1, 2, 2, 1], [2, 2]))//[2,2]
console.log(findIntersectionValues([4, 9, 5], [9, 4, 9, 8, 4]))//[4,9]
console.log(findIntersectionValues([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6]))//[3,4]

// ✅ Beats 90.45%of users with JavaScript