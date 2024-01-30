const removePalindromeSub = function(s) {
    if (s.length === 0) return 0;
    if (s === s.split('').reverse().join('')) return 1;
    return 2;
};
console.log(removePalindromeSub("ababa")); // 1
console.log(removePalindromeSub("abb")); // 2
console.log(removePalindromeSub("baabb")); // 2

// Time Complexity: O(n)
// Space Complexity: O(1)
// ✅ Hints: Using String