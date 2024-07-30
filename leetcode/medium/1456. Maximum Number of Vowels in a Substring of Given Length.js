const maxVowels = (s, k) => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let max = 0;
    let count = 0;
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            count++;
        }
    }
    max = count;
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) {
            count++;
        }
        if (vowels.has(s[i - k])) {
            count--;
        }
        max = Math.max(max, count);
    }
    return max;
}

// Test cases:
console.log(maxVowels('abciiidef', 3)); // 3
console.log(maxVowels('aeiou', 2)); // 2
console.log(maxVowels('leetcode', 3)); // 2

// Time Complexity: O(n)
// Space Complexity: O(1)
// ✅ Hints: Sliding Window Approach