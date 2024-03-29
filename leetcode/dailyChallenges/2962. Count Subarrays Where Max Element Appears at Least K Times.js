const countSubarrays =(nums, k)=>{
    let ans = 0;
    let cnt = 0;
    let mx = Math.max(...nums); // Find the maximum element
    let j = 0;
  
    for (let x of nums) {
      while (j < nums.length && cnt < k) {
        cnt += nums[j] === mx; // Increment count if current element is the max
        j++;
      }
  
      if (cnt < k) break; // No need to continue if count is less than k
  
      ans += nums.length - j + 1; // Add the number of subarrays from current position
      cnt -= x === mx; // Decrement count if current element was the max
    }
  
    return ans;
}

console.log(countSubarrays([1,3,2,3,3], 2)); // 6
console.log(countSubarrays([1,4,2,1], 3)); // 0

// time complexity: O(n)
// space complexity: O(1)
// ✅ Hints: Sliding Window Technique