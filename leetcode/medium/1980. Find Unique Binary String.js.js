const findDifferentBinaryString = (nums) => {
  const n = nums.length;
  const set = new Set(nums);
  for (let i = 0; i < 1 << n; i++) {
    const str = i.toString(2).padStart(n, '0'); 
    if (!set.has(str)) return str;
  }
  
};

console.log(findDifferentBinaryString(["01", "10"])); // "00"

// time complexity: O(2^n)
// space complexity: O(2^n)
// ✅ Hints: use a set to store the unique binary strings and iterate through all the possible binary strings