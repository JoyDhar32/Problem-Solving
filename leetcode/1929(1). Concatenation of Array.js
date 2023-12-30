var getConcatenation = function(nums) {
    let result =nums.concat(nums);
  return result;
};
console.log(getConcatenation([1,2,1]));
console.log(getConcatenation([1,3,2,1]));
console.log(getConcatenation([1]));

// time complexity: O(n)
// space complexity: O(n)
// ✅