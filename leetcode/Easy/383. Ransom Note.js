function canConstruct(ransomNote, magazine) {
    const ransomNoteCount = {};
    const magazineCount = {};

    for (const char of ransomNote) {
        ransomNoteCount[char] = (ransomNoteCount[char] || 0) + 1;
    }

    for (const char of magazine) {
        magazineCount[char] = (magazineCount[char] || 0) + 1;
    }

    for (const char in ransomNoteCount) {
        if (ransomNoteCount[char] > (magazineCount[char] || 0)) {
            return false;
        }
    }

    return true;
}

// Example 1
console.log(canConstruct("a", "b"));  // Output: false

// Example 2
console.log(canConstruct("aa", "ab"));  // Output: false

// Example 3
console.log(canConstruct("aa", "aab"));  // Output: true

// Runtime: 88 ms, faster than 99.47% of JavaScript online submissions for Ransom Note.
// Memory Usage: 41.1 MB, less than 100.00% of JavaScript online submissions for

// Time Complexity: O(n)
// Space Complexity: O(n)

// ✅ Hint: Use two hash maps to store the count of each character in the ransom note and magazine. Then, iterate over the ransom note and check if the count of each character is less than or equal to the count of the same character in the magazine. If not, return false. Otherwise, return true.
