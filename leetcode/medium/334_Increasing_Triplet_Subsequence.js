const increasingTriplet = (nums) => {
    let first = Infinity; // Infinity is a special value that is greater than all numbers
    let second = Infinity; // Infinity is a special value that is greater than all numbers
    
    for (let i = 0; i < nums.length; i++) {    // Iterate through the array and check if the current element is less than the first or second element
        if (nums[i] <= first) {            // If it is less than or equal to the first element, update the first element with the current element
        first = nums[i];            // If it is less than or equal to the second element, update the second element with the current element
        } else if (nums[i] <= second) {       // If the current element is greater than the second element, return true
        second = nums[i];       // If the current element is greater than the first element, update the first element with the second element
        } else {          // If the current element is greater than the second element, return true
        return true;
        }
    }
    
    return false; // If no increasing triplet is found, return false 
    };

console.log(increasingTriplet([1, 2, 3, 4, 5])) //true
console.log(increasingTriplet([5, 4, 3, 2, 1])) //false
console.log(increasingTriplet([2, 1, 5, 0, 4, 6])) //true
console.log(increasingTriplet([1, 2, 3, 1, 2, 1])) //false

// Time Complexity: O(n). Single pass.
// Space Complexity: O(1). Constant space required.
// ✅ Hints: Basic Logic Implementation