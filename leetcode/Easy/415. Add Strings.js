const addStrings = (num1, num2) => {
    let carry = 0;
    let result = '';
    let i = num1.length - 1;
    let j = num2.length - 1;
    
    while (i >= 0 || j >= 0) {
        let sum = carry;
        if (i >= 0) {
        sum += parseInt(num1[i--]);
        }
        if (j >= 0) {
        sum += parseInt(num2[j--]);
        }
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }
    
    if (carry) {
        result = carry + result;
    }
    
    return result;
    };

console.log(addStrings('123', '456')); // 579
console.log(addStrings('1', '9')); // 10
console.log(addStrings('1', '99')); // 100

// Time Complexity: O(n)
// Space Complexity: O(1)
// ✅Hints: using two pointers to loop through the two strings and add the two numbers together.