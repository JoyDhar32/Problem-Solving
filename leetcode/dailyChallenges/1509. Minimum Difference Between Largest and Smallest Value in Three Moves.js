const minDifference = (nums) => {
    nums.sort((a, b) => (a - b));
    let length = nums.length;
    if(length<=4) return 0;
    let difference1=nums[length-1]-nums[3];
    let difference2=nums[length-2]-nums[2];
    let difference3=nums[length-3]-nums[1];
    let difference4=nums[length-4]-nums[0];
    let result= Math.min(difference1,difference2,difference3,difference4)
    return result;
}

console.log(minDifference([1, 2, 2, 1])) // 0
console.log(minDifference([4, 9, 5])) // 1
console.log(minDifference([1, 5, 0, 10, 14])) // 8