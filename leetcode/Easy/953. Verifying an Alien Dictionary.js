const isAlienSorted = (words, order) => {
    const map = {};
    for (let i = 0; i < order.length; i++) {
        map[order[i]] = i;
    }

    const compare = (word1, word2) => {
        const len = Math.min(word1.length, word2.length);
        for (let i = 0; i < len; i++) {
            if (word1[i] !== word2[i]) {
                return map[word1[i]] - map[word2[i]];
            }
        }
        return word1.length - word2.length;
    };
    for (let i = 0; i < words.length - 1; i++) {
        if (compare(words[i], words[i + 1]) > 0) {
            return false;
        }
    }
    return true;
};

// Test cases
console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz")); // true
console.log(isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")); // false
console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz")); // false

// Time Complexity: O(n * m) where n is the number of words and m is the average length of the words
// Space Complexity: O(1) for the map
// ✅ Hints: Use a map to store the order of the alien alphabet. Compare each pair of adjacent words to check if they are sorted according to the alien alphabet.