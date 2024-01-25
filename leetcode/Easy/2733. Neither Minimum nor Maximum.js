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
// // ✅ Using Sort
