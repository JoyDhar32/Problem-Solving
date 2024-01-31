const vowelStrings = (words, left ,right) => {
    return words.reduce((acc, curr, i) => {
        if (
            (i >= left && i <= right) &&  // Check if the current index is within the specified range
            (curr.startsWith("a") || curr.startsWith("e") || curr.startsWith("i") || curr.startsWith("o") || curr.startsWith("u")) &&  // Check if the word starts with a vowel
            (curr.endsWith("a") || curr.endsWith("e") || curr.endsWith("i") || curr.endsWith("o") || curr.endsWith("u"))  // Check if the word ends with a vowel
        )
        {
            acc++;
        }
        return acc;
    }, 0);
}
console.log(vowelStrings(["abc","def","ghi","jkl","mno"],0,2));

// // // Time Complexity: O(n)
// // // Space Complexity: O(1)
// ✅ Hints: Using the reduce method, we can iterate through the array and check if the current index is within the specified range, if the word starts with a vowel, and if the word ends with a vowel. If all of these conditions are met, we can increment the accumulator by 1.