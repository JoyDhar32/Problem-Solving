const numberOfPairs = (nums1,nums2,k) => {
  let pairs = 0;
  let num1Length = nums1.length;
  let num2Length = nums2.length;
  for (let i = 0; i < num1Length; i++) {
    for (let j = 0; j < num2Length; j++) {
      let first = nums1[i];
      let second = nums2[j] * k;
      if (first % second == 0) {
        pairs++;
      }
    }
  }
  return pairs;
}

console.log(numberOfPairs([1,2,3], [3,4,6], 2)); // 2
console.log(numberOfPairs([1,2,3], [3,4,6], 1)); // 3
console.log(numberOfPairs([1,2,3], [3,4,6], 3)); // 1

// Time complexity: O(n^2)
// Space complexity: O(1)
// ✅ Hints: Use two nested loops to iterate over the two arrays and check if the current pair is divisible by k. If it is, increment the count of pairs.