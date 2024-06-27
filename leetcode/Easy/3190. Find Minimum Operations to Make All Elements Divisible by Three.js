const minimumOperations = (nums) => {
    let count=0;
    let len=nums.length;
  for(let i=0;i<len;i++){
    if(nums[i]%3!=0) count++;
    }
return count;
    };

console.log(minimumOperations([1, 2, 3, 4, 5, 6])) // 4
console.log(minimumOperations([1, 2, 3, 4, 5, 6, 7, 8, 9])) // 6
console.log(minimumOperations([3, 6, 9, 1])) // 1
console.log(minimumOperations([3, 6, 9, 1, 2])) // 2
console.log(minimumOperations([3, 6, 9, 1, 2, 3])) // 2

// time complexity: O(n)
// space complexity: O(1)
// ✅ Hint: Modulous by 3 and Counting 