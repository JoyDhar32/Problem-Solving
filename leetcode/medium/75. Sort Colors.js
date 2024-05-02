const sortColors=(nums)=>{
    return nums.sort((a,b)=>a-b);
}

console.log(sortColors([2,0,2,1,1,0])); // [0,0,1,1,2,2]
console.log(sortColors([2,0,1])); // [0,1,2]
console.log(sortColors([0])); // [0]

// time complexity: O(nlogn)
// space complexity: O(1)
// ✅ Hint: Use the sort method to sort the array in ascending order