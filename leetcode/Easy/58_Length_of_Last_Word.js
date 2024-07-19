const lengthOfLastWord = (s) => {
    let len = s.length - 1;
    let count = 0;
    s = s.trim();
    for (let i = len; i >= 0; i--) {
        if (s[i] === " ") break;
        count++;
    }
    return count;
}

console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("Hello Joy ")); // 3
console.log(lengthOfLastWord("Hello Bijoy  ")); // 5

// time complexity is O(n) where n is the length of the string s.
// space complexity is O(1). Constant space required.
// ✅ Hints: Use Trim() and Loop Backwards to Find the Last Word Length