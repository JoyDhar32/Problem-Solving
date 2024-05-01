const twoOutOfThree = (nums1, nums2, nums3) => {
    const allElements = new Set([...nums1, ...nums2, ...nums3]);
    const result = [...allElements].filter(
      (element) =>
        (nums1.includes(element) && nums2.includes(element)) ||
        (nums1.includes(element) && nums3.includes(element)) ||
        (nums2.includes(element) && nums3.includes(element))
    );
  
    return result;  
}

console.log(twoOutOfThree([1,1,3,2], [2,3], [3])); // [3,2]
console.log(twoOutOfThree([3,1], [2,3], [3])); // [3]
console.log(twoOutOfThree([3], [3], [3])); // [3]

// time complexity: O(n)
// space complexity: O(n)
// ✅ Hint: Use a set to store all elements from the three arrays