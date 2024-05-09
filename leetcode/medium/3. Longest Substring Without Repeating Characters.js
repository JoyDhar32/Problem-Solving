constlengthOfLongestSubstring = (s) => {
    let max = 0;
    let start = 0;
    let map = {};
    let len=s.length;
    for (let i = 0; i < len; i++) {
        if (map[s[i]] >= start) {
            start = map[s[i]] + 1;
        }
        map[s[i]] = i;
        max = Math.max(max, i - start + 1);
    }
    return max;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3

// Time complexity: O(n)
// Space complexity: O(n)
// ✅ Hints: use a map to store the index of each character