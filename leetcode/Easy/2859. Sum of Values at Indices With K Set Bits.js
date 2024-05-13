const sumIndicesWithKSetBits = (nums, k) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i].toString(2).split('').filter(x => x === '1').length === k) {
            sum += nums[i];
        }
    }
    return sum;
};

console.log(sumIndicesWithKSetBits([1, 2, 3, 4, 5], 1));//1+2+4+5=12
console.log(sumIndicesWithKSetBits([1, 2, 3, 4, 5], 2));//3+5=8
console.log(sumIndicesWithKSetBits([1, 2, 3, 4, 5], 3));//7