const largestPerimeter = (nums) =>{
    const numsLength = nums.length;
    let numsSum = nums.reduce((a, b) => a + b, 0);
    nums.sort((a, b) => a - b);

    for (let i = numsLength - 1; i > 1; i--) {
        if (numsSum > 2 * nums[i]) {
            return numsSum;
        }
        numsSum -= nums[i];
    }
    return -1;
}
console.log(largestPerimeter([5,5,5]));//5
console.log(largestPerimeter([1,2,1]));//0
console.log(largestPerimeter([3,2,3,4]));//10
console.log(largestPerimeter([3,6,2,3]));//8

// time complexity is O(nlogn)
// space complexity is O(1)
// ✅ Hints: usign the sort method and the reduce method