const maxProduct = (words) => {
    let max = 0;
    const len = words.length;
    const bit = Array(len).fill(0);
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < words[i].length; j++) {
            bit[i] |= 1 << (words[i].charCodeAt(j) - 97);
        }
    }
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if ((bit[i] & bit[j]) === 0) {
                max = Math.max(max, words[i].length * words[j].length);
            }
        }
    }
    return max;
};

console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));//16
console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]));//4
console.log(maxProduct(["a", "aa", "aaa", "aaaa"]));//0


// Time complexity: O(n^2)
// Space complexity: O(n)
// ✅ Hints: Bit manipulation