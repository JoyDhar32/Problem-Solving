const sortedSquares = (nums) => {
    let result = [];
    let left = 0;
    let right = nums.length - 1;
    let index = right;
    while (left <= right) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
        result[index--] = nums[left] ** 2;
        left++;
        } else {
        result[index--] = nums[right] ** 2;
        right--;
        }
    }
    return result;
    }
    console.log(sortedSquares([-4,-1,0,3,10]))//[0,1,9,16,100]
    console.log(sortedSquares([-7,-3,2,3,11]))//[4,9,9,49,121]
    console.log(sortedSquares([1]))//[1]