const twoSum = (numbers, target) => {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
        return [left + 1, right + 1];
        } else if (sum < target) {
        left++;
        } else {
        right--;
        }
    }
    };

// Test Cases
console.log(twoSum([2,7,11,15], 9)); //[1,2]
console.log(twoSum([2,3,4], 6)); //[1,3]
console.log(twoSum([-1,0], -1)); //[1,2]
console.log(twoSum([5,25,75], 100)); //[2,3]

// Time Complexity: O(n)
// Space Complexity: O(1)
// ✅ Hint: Two pointers approach 
