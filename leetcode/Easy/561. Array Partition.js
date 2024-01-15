const arrayPairSum = (nums) =>{
    let result=0;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i += 2) {
        result += nums[i];
    }
    return result;
}
console.log(arrayPairSum([1, 4, 3, 2])); // 4
console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));    // 9
console.log(arrayPairSum([1, 2, 3, 4]));   // 4

// ✅ Beats 98.78% JS submissions in runtime