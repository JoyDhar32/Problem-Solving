const test = (nums) => {
    nums.sort((a, b) => (a - b));
    let length = nums.length;
    let firstNumber = nums[0];
    nums[length - 1] = firstNumber;
    nums[length - 2] = firstNumber;
    nums[length - 3] = firstNumber;
    nums.sort((a, b) => (a - b));
    return nums[length - 1] - nums[0];
}

console.log(test([1, 2, 2, 1])) // [1,1,1,1]
console.log(test([4, 9, 5])) // [4,4,4,4]
console.log(test([1, 5, 0, 10, 14])) // [1,1,1,1]