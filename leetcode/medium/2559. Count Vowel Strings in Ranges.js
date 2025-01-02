const vowelStrings = (words, queries) => {
    const isVowel = (char) => 'aeiou'.includes(char);

    const n = words.length;
    const prefixSum = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        const word = words[i];
        if (isVowel(word[0]) && isVowel(word[word.length - 1])) {
            prefixSum[i + 1] = prefixSum[i] + 1;
        } else {
            prefixSum[i + 1] = prefixSum[i];
        }
    }

    const result = [];
    for (const [li, ri] of queries) {
        result.push(prefixSum[ri + 1] - prefixSum[li]);
    }

    return result;
};

// Test cases
console.log(vowelStrings(["aba", "bcb", "ece", "aa", "e"], [[0, 2], [1, 4], [1, 1]])); // [2, 3, 0]
console.log(vowelStrings(["a", "e", "i"], [[0, 2], [0, 1], [2, 2]])); // [3, 2, 1]

// Time Complexity: O(n + q) where n is the length of the words array and q is the number of queries
// Space Complexity: O(n) for the prefix sum array

//✅ Hints: Create a prefix sum array to store the number of words that start and end with a vowel up to the current index. For each query, calculate the number of words that start and end with a vowel in the given range using the prefix sum array. Return the result array.