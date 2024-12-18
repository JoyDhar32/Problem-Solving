const isPerfectSquare = (num) => {
    let left = 1;
    let right = num;
    
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        let square = mid * mid;
    
        if (square === num) {
        return true;
        } else if (square < num) {
        left = mid + 1;
        } else {
        right = mid - 1;
        }
    }
    
    return false;
    };

// Test cases
console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(14)); // false
console.log(isPerfectSquare(25)); // true

// Time Complexity: O(log n) where n is the input number num due to binary search
// Space Complexity: O(1) as we are using constant space
// ✅ Hints: Use binary search to find the square root of the given number. Update the low and high pointers based on the comparison of the square of the mid element with the input number. Return true if the square of the mid element is equal to the input number, else return false.