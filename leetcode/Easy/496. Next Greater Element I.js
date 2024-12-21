const nextGreaterElement = (nums1, nums2) => {
  const stack = [];
  const map = {};
  for (let i = 0; i < nums2.length; i++) {
    while (stack.length && stack[stack.length - 1] < nums2[i]) {
      map[stack.pop()] = nums2[i];
    }
    stack.push(nums2[i]);
  }
  return nums1.map((num) => map[num] || -1);
};

// Test cases
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1, 3, -1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])); // [3, -1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4, 5])); // [3, 5]

// Time Complexity: O(n + m) where n is the number of elements in the array nums1 and m is the number of elements in the array nums2
// Space Complexity: O(n) where n is the number of elements in the array nums1
// ✅ Hints: Use a stack to store the elements of the array nums2. Use a hash map to store the next greater element for each element in the array nums2. Iterate the array nums2 and check if the current element is greater than the top element of the stack. If it is, then update the hash map with the next greater element. Return the array of next greater elements for each element in the array nums1.