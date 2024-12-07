const largestNumber = (nums) => {
  nums.sort((a, b) => {
    const str1 = `${a}${b}`; // Concatenate a and b as strings to compare
    const str2 = `${b}${a}`; // Concatenate b and a as strings to compare
    return str2 - str1; // Sort in descending order based on the concatenation of the two numbers
  });

  return nums[0] === 0 ? '0' : nums.join('');
};

// Test cases
console.log(largestNumber([10, 2])); // '210'
console.log(largestNumber([3, 30, 34, 5, 9])); // '9534330'
console.log(largestNumber([1])); // '1'

// Time Complexity: O(n log n) where n is the length of the input array
// Space Complexity: O(1) since we are not using any extra space

//✅ Hints: Sort the numbers in descending order based on the concatenation of the two numbers. If the first number is greater than the second number, return -1. If the second number is greater than the first number, return 1. If the two numbers are equal, return 0. If the first number is 0, return '0'. Otherwise, return the sorted array joined as a string.