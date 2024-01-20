const singleNumber =(nums) =>{
    let result = 0;
    for(let i = 0; i < nums.length; i++){
        result ^= nums[i];
    }
    return result;
}

console.log(singleNumber([4,1,2,1,2])); // 4
console.log(singleNumber([2,2,1])); // 1
console.log(singleNumber([1])); // 1
console.log(singleNumber([1,0,1])); // 0
console.log(singleNumber([1,0,1,2,2])); // 0
console.log(singleNumber([1,0,1,2,2,3,3])); // 0

//✅ Hints: Use XOR
// time complexity: O(n)
// space complexity: O(1)