/**
 * @param {string[]} sentences
 * @return {number}
 */
var maxNumberOfWords = function (sentences) {
    let maxWords = 0;

    for (let sentence of sentences) {
        let wordCount = 0;

        for (let char of sentence) {
            // Count words based on spaces
            if (char === ' ') {
                wordCount++;
            }
        }

        // Add 1 to include the last word (no space after the last word)
        wordCount++;

        // Update maxWords if the current sentence has more words
        maxWords = Math.max(maxWords, wordCount);
    }

    return maxWords;
};

// Example usage:
const example1 = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
const example2 = ["please wait", "continue to fight", "continue to win"];

console.log(maxNumberOfWords(example1)); // Output: 6
console.log(maxNumberOfWords(example2)); // Output: 3

// Time Complexity: O(n^2)
// Space Complexity: O(1)
// ✅ Hints: Count words based on spaces. Update maxWords if the current sentence has more words.
