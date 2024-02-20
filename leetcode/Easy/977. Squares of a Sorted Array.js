const sortedSquares = (nums)=>{
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        result.push(nums[i] ** 2);
    }

     result= result.sort((a, b) => a - b);
    return result;
}
console.log(sortedSquares([-4,-1,0,3,10])); // [0,1,9,16,100]
console.log(sortedSquares([-7,-3,2,3,11])); // [4,9,9,49,121]
console.log(sortedSquares([1])); // [1]
console.log(sortedSquares([0,2])); // [0,4]

// Time complexity is O(nlogn)
// Space complexity is O(n)
// ✅ Hints: using exponentiation and sorting the array