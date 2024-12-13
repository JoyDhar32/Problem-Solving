const longestPalindrome = (s) => {
    if (s.length < 2) return s;

    let longest = '';

    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right);
    };

    for (let i = 0; i < s.length; i++) {
        // Check for odd-length palindromes
        let odd = expandAroundCenter(i, i);
        if (odd.length > longest.length) {
            longest = odd;
        }

        // Check for even-length palindromes
        let even = expandAroundCenter(i, i + 1);
        if (even.length > longest.length) {
            longest = even;
        }
    }

    return longest;
};

// Test cases
console.log(longestPalindrome('babad')); // 'aba' or 'bab'
console.log(longestPalindrome('cbbd')); // 'bb'
console.log(longestPalindrome('a')); // 'a'
console.log(longestPalindrome('ac')); // 'a'

// Time Complexity: O(n^2) where n is the length of the input string
// Space Complexity: O(1) since we are using a constant amount of extra space
// ✅ Hints: This is a simple problem. We iterate through the input string and expand around each character to find the longest palindrome. We check for both odd and even-length palindromes. We return the longest palindrome found.