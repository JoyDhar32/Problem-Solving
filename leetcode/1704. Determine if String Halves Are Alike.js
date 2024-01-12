var halvesAreAlike = function(s) {
    // Function to count vowels in a string
    const countVowels = (str) => {
        const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
        let count = 0;

        for (const char of str) {
            if (vowels.has(char)) {
                count++;
            }
        }

        return count;
    };
    // Split the string into two halves
    const length = s.length;
    const firstHalf = s.slice(0, length / 2);
    const secondHalf = s.slice(length / 2);

    // Check if the two halves have the same number of vowels
    return countVowels(firstHalf) === countVowels(secondHalf);
};

// Example usage:
console.log(halvesAreAlike("book"));      // Output: true
console.log(halvesAreAlike("textbook"));  // Output: false

// Time Complexity: O(n)
// Space Complexity: O(1)

//✅ Hint: use slice() to split the string into two halves.

