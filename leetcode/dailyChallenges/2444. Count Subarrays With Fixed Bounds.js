var countSubarrays = (nums, minK, maxK) => {
    let minI = -1, maxI = -1, left = -1, right = 0;
    let count = 0;
    
    while (right < nums.length) {
      if (nums[right] < minK || nums[right] > maxK) {
        minI = right;
        maxI = right;
        left = right;
      } else {
        minI = (nums[right] === minK) ? right : minI;
        maxI = (nums[right] === maxK) ? right : maxI;
      }
      
      count += Math.min(minI, maxI) - left;
      right++;
    }
    
    return count;
  };
  
  
console.log(countSubarrays([1,2,1,2,3], 2, 3)); // 7
console.log(countSubarrays([1,2,1,3,4], 3, 3)); // 3
console.log(countSubarrays([1,2,1,3,4], 1, 1)); // 1

// time complexity is O(n) where n is the length of the nums array.
// space complexity is O(1).
// ✅ Hints: Sliding Window Technique