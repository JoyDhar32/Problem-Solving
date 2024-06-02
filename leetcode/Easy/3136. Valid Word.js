function isValidWord(word) {
    if (word.length < 3) {
        return false;
    }
    const validCharRegex = /^[a-zA-Z0-9]+$/;
    const vowelsRegex = /[aeiouAEIOU]/;
    const consonantsRegex = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/;

    if (!validCharRegex.test(word)) {
        return false;
    }
    if (!vowelsRegex.test(word) || !consonantsRegex.test(word)) {
        return false;
    }

    return true;
}

// Test cases
console.log(isValidWord("234Adas")); // true
console.log(isValidWord("b3")); // false
console.log(isValidWord("a3$e")); // false
console.log(isValidWord("Hello123")); // true
console.log(isValidWord("3E2")); // false


// time complexity: O(n)
// space complexity: O(1) because we are using only 3 regex variables
// ✅ Hints: using regex to check if the word contains only alphabets and numbers, vowels and consonants