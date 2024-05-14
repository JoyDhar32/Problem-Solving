const differenceOfSum = (nums) => {
    let sum = 0;
    let digitSum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        digitSum += nums[i].toString().split('').reduce((acc, cur) => acc + parseInt(cur), 0);
    }
    return Math.abs(sum - digitSum);
};

console.log(differenceOfSum([10, 20, 30]));//54
console.log(differenceOfSum([5, 10, 15]));//18
console.log(differenceOfSum([1, 2, 3, 4, 5]));//0

// Time Complexity: O(n)
// Space Complexity: O(1) because we are not using any extra space to store the result

//✅ Hints: use the reduce method to calculate the sum of the digits of each element in the array