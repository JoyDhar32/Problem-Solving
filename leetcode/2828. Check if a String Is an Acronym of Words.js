const isAcronm = (words, s) => {
    if (words.length === 0 || s.length === 0) return false;
    let acronym = "";
    for (let word of words) {
        if (word.length > 0) {
            acronym += word[0];
        }
    }
    return acronym === s;
}

console.log(isAcronm(["a", "b", "c"], "abc")); // true
console.log(isAcronm(["a", "b", "c"], "abcd")); // false
console.log(isAcronm(["a", "b", "c"], "ab")); // false
console.log(isAcronm(["a", "b", "c"], "a")); // false
console.log(isAcronm(["a", "b", "c"], "ac")); // false
console.log(isAcronm(["a", "b", "c"], "bc")); // false
console.log(isAcronm(["a", "b", "c"], "ac")); // false
console.log(isAcronm(["a", "b", "c"], "bc")); // false
console.log(isAcronm(["a", "b", "c"], "ac")); // false
console.log(isAcronm(["a", "b", "c"], "bc")); // false

// time complexity: O(n)
// space complexity: O(1)

// ✅ Beats 88% of users with JavaScript