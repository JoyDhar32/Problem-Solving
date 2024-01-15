const arrayStringsAreEqual = (word1, word2) => {
   // return word1.join('') === word2.join('');

    // Concatenate the elements of each array into strings
    const str1 = word1.join('');
    const str2 = word2.join('');

    // Compare the resulting strings
    return str1 === str2;
};

// Example usage:
const example1 = ["ab", "c"];
const example2 = ["a", "bc"];
console.log(arrayStringsAreEqual(example1, example2)); // Output: true

const example3 = ["a", "cb"];
const example4 = ["ab", "c"];
console.log(arrayStringsAreEqual(example3, example4)); // Output: false

const example5 = ["abc", "d", "defg"];
const example6 = ["abcddefg"];
console.log(arrayStringsAreEqual(example5, example6)); // Output: true

// Time Complexity: O(n)
// Space Complexity: O(n)

// ✅ Beats 100% of users with JavaScript


