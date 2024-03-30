var subarraysWithKDistinct = function(nums, k) {
  return atMostKDistinct(nums, k) - atMostKDistinct(nums, k - 1);
};

var atMostKDistinct = function(nums, k) {
  let count = new Array(nums.length + 1).fill(0);
  let left = 0;
  let distinct = 0;
  let total = 0;

  for (let right = 0; right < nums.length; right++) {
      if (count[nums[right]] === 0) distinct++;
      count[nums[right]]++;

      while (distinct > k) {
          count[nums[left]]--;
          if (count[nums[left]] === 0) distinct--;
          left++;
      }

      total += right - left + 1;
  }

  return total;
};
console.log(subarraysWithKDistinct([1,2,1,2,3], 2)); // 7
console.log(subarraysWithKDistinct([1,2,1,3,4], 3)); // 3
console.log(subarraysWithKDistinct([1,2,1,3,4], 1)); // 1

// time: O(n)
// space: O(n)
// ✅ Hints: Sliding Window Technique