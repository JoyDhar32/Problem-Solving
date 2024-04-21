const isPalindrome = (x) => {
    if (x < 0) return false;  // negative numbers are not palindrome & 0 also palindrome
    let reversed = 0;
    let temp = x;
    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return reversed === temp;
}
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121));    // false
console.log(isPalindrome(10));  // false
console.log(isPalindrome(0));   // true

// time complexity: O(n)
// space complexity: O(1)
// ✅ Hint: Use the modulo operator to get the last digit of the number. Then, multiply the reversed number by 10 and add the last digit to it. Finally, divide the number by 10 to remove the last digit.
// ✅ Beats 99.99% of users with JavaScript