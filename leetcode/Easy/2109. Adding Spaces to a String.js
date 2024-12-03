const addSpaces = (s, spaces) => {
    let result = '';
    let spaceIndex = 0;
    for (let i = 0; i < s.length; i++) {
        if (spaceIndex < spaces.length && i === spaces[spaceIndex]) {
            result += ' ';
            spaceIndex++;
        }
        result += s[i];
    }
    return result;
};

// Test cases
console.log(addSpaces('LeetcodeHelpsMeLearn', [8, 13, 15])); // 'Leetcode Helps Me Learn'
console.log(addSpaces('icodeinpython', [1, 5, 7, 9])); // 'i code in py thon'
console.log(addSpaces('spacing', [0, 1, 2, 3, 4, 5, 6])); // ' s p a c i n g'

// Time Complexity: O(n) where n is the length of the string
// Space Complexity: O(n) for the result string

//✅ Hints: Iterate through the string and insert a space at the specified indices. Keep track of the current index in the spaces array. Concatenate the characters of the string and the space as you iterate through the string. Return the resulting string.
