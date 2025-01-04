const countPalindromicSubsequences = (s) => {
    const n = s.length;
    const uniquePalindromes = new Set();
    for (let i = 0; i < n; i++) {
        for (let j = i + 2; j < n; j++) {
            if (s[i] === s[j]) {
                for (let k = i + 1; k < j; k++) {
                    uniquePalindromes.add(s[i] + s[k] + s[j]);
                }
            }
        }
    }
    return uniquePalindromes.size;
};

// Test cases
console.log(countPalindromicSubsequences("aabca")); // 3
console.log(countPalindromicSubsequences("adc")); // 0
console.log(countPalindromicSubsequences("bbcbaba")); // 4

// Time Complexity: O(n^3) where n is the length of the input string
// Space Complexity: O(n) for storing the unique palindromic subsequences

// ✅ Hints: Iterate through the string and find all the palindromic subsequences of length 3. Store the unique palindromic subsequences in a set. Return the size of the set.