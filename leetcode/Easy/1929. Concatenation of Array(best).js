let getConcatenation = (nums) => {
    let result = [];
    len = nums.length;
    for (let i = 0; i < len; i++) {
        result.push(nums[i]);
    }
    for (let i = 0; i < len; i++) {
        result.push(nums[i]);
    }
    return result;
}

console.log(getConcatenation([1, 2, 1])) // [1,2,1,1,2,1]
console.log(getConcatenation([1])) // [1,1]
console.log(getConcatenation([1, 2, 3])) // [1,2,3,1,2,3]

// Time Complexity: O(N), where N is the number of elements in the input array.
// Space Complexity: O(N), where N is the number of elements in the input array. We are using extra space to store the result array.
// ✅ Hints : Best Time Complexity. Array Concatenation