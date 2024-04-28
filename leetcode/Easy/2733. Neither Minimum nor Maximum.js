const findNonMinOrMax = (nums) =>{
    nums.sort((a,b)=>a-b);
    let len=nums.length;
    if(len<3) return -1;
    result = nums[1];
    return result;
}

console.log(findNonMinOrMax([1,2,3,4,5])); // 2
console.log(findNonMinOrMax([2,2,2,2,2])); // 2
console.log(findNonMinOrMax([1,1,1,1,1])); // 1

// // time complexity: O(N)
// // space complexity: O(1)
// // ✅ Hints: Using Sort function, sort the array in ascending order. If the length of the array is less than 3, return -1. Otherwise, return the second element of the sorted array. This is because the first element is the minimum and the last element is the maximum. The second element is neither the minimum nor the maximum.
