const buildArray = (nums) => {
    let result = [];
    for(let i=0; i<nums.length; i++){
        result.push(nums[nums[i]]);
    }
    return result;
}

console.log(buildArray([0,2,1,5,3,4])) // [0,1,2,4,5,3]
console.log(buildArray([5,0,1,2,3,4])) // [4,5,0,1,2,3]

// time complexity: O(n)
// space complexity: O(n) /* to store the result array */
// ✅ Hints: Create a new array and store the value at the index of the current element in the result array.