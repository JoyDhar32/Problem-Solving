const reversePrefix = (word, ch) => {
    let index = word.indexOf(ch);
    if (index === -1) return word;
    return word.slice(0, index + 1).split('').reverse().join('') + word.slice(index + 1);
};

console.log(reversePrefix("abcdefg", "d"));//"dcbaefg"
console.log(reversePrefix("xyxzxe", "z"));//"zxyxxe"
console.log(reversePrefix("abcd", "z"));//"abcd"

// Time Complexity: O(n)
// Space Complexity: O(1)
// ✅ Hints: Using JS Built-in Functions