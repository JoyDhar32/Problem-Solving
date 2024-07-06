const isSubsequence = (s, t) => {
    let i = 0;  // Initialize the pointer i to 0
    let j = 0; // Initialize the pointer j to 0
    while (i < s.length && j < t.length) { // While i is less than the length of s and j is less than the length of t 
        if (s[i] === t[j]) {    // If the character at the pointer i in s is equal to the character at the pointer j in t
            i++;    // Increment the pointer i by 1
        }
        j++;    // Increment the pointer j by 1
    }
    return i === s.length;  // Return true if i is equal to the length of s; otherwise, return false
};

console.log(isSubsequence('abc', 'ahbgdc')); // Output: true
console.log(isSubsequence('axc', 'ahbgdc')); // Output: false
console.log(isSubsequence('abc', 'ahbgdc')); // Output: true

// Time Complexity: O(n+m)
// Space Complexity: O(1)
// ✅ Hints: Use two pointers i and j to iterate over the strings s and t. If the characters at the pointers are equal, increment the pointer i. Return true if i is equal to the length of s; otherwise, return false.