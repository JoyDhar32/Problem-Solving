const checkValidString =(s) =>{
    let left = 0;
    let right = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '*') {
            left++;
        } else {
            left--;
        }
        if (left < 0) {
            return false;
        }
    }
    if (left === 0) {
        return true;
    }
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ')' || s[i] === '*') {
            right++;
        } else {
            right--;
        }
        if (right < 0) {
            return false;
        }
    }
    return true;

}

console.log(checkValidString("()")) // true
console.log(checkValidString("(*)")) // true
console.log(checkValidString("(*))")) // true
console.log(checkValidString("(*()")) // true

// Time Complexity: O(n)
// Space Complexity: O(1)
// ✅ Hints: use two pointers