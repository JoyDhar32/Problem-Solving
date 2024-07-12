const gcdOfStrings = (str1, str2) => {
    if ((str1 + str2) !== (str2 + str1)) return '';
    let lengthStr1 = str1.length;
    let lengthStr2 = str2.length;
    const gcd = (len1, len2) => {
        return (len2 === 0 ? len1 : gcd(len2, len1 % len2));
    }
    let finalLen = gcd(lengthStr1, lengthStr2);
    return str1.slice(0, finalLen);
}


console.log(gcdOfStrings('ABCABC', 'ABC')); // Output: ABC
console.log(gcdOfStrings('ABABAB', 'ABAB')); // Output: AB
console.log(gcdOfStrings('LEET', 'CODE')); // Output: ""

// time complexity: O(n)
// space complexity: O(1)
// ✅ Hint: Check if the concatenation of the two strings is equal to the concatenation of the other string. If not, return an empty string. Find the greatest common divisor of the lengths of the two strings. Return the substring of the first string from index 0 to the greatest common divisor.