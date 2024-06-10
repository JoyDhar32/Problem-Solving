const moveZeroes = (nums) => {
  
    for (let j = 0, i=0; j < nums.length; j++) {
        if (nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
    }
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // [0]
console.log(moveZeroes([0, 0, 1])); // [1,0,0]

// time complexity: O(n)
// space complexity: O(1)
// ✅ Hints: use two pointers to swap the elements