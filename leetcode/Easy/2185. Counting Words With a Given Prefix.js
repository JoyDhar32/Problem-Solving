const prefixCount = (words, pref) => {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(pref)) {
            count++;
        }
    }
    return count;
}

console.log(prefixCount(["ab", "abc", "def", "ghi"], "ab"));
console.log(prefixCount(["ab", "abc", "def", "ghi"], "de"));

// ✅ Hints: Use startsWith() method to check if the word starts with the given prefix.
// Beats 100% of JavaScript submissions in runtime