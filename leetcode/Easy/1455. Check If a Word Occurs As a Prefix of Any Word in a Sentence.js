const isPrefixOfWord = (sentence, searchWord) => {
    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(searchWord)) {
            return i + 1;
        }
    }
    return -1;
};

console.log(isPrefixOfWord("i love eating burger", "burg")); // 4
console.log(isPrefixOfWord("this problem is an easy problem", "pro")); // 2
console.log(isPrefixOfWord("i am tired", "you")); // -1
console.log(isPrefixOfWord("i use triple pillow", "pill")); // 4

// Time complexity: O(n)
// Space complexity: O(n)
// ✅ Hints: use the split method to get words from the sentence, then iterate the words to check if the word starts with the searchWord. If it does, return the index plus one. If no word starts with the searchWord, return -1.