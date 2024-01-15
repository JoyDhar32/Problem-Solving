const checkIfPangram = (sentence) => {
    const set = new Set();
    for (const char of sentence) {
        set.add(char);
    }
    return set.size === 26;
};

/*
var checkIfPangram = function(sentence) {
return new Set([...sentence]).size === 26;
};
*/





console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")); // true
console.log(checkIfPangram("leetcode")); // false
console.log(checkIfPangram("abcdefghijklmnopqrstuvwxyz")); // true
console.log(checkIfPangram("abcdefghijklmnopqrstuvwxy")); // false
console.log(checkIfPangram("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz")); // false

// time complexity: O(n)
// space complexity: O(n)

// ✅ Beats 100%of users with JavaScript
