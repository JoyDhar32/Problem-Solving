const reverseVowel = (s) => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const arr = s.split('');
    let result = '';
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        if (!vowels.has(arr[i].toLowerCase())) {
            i++;
            continue;
        }
        if (!vowels.has(arr[j].toLowerCase())) {
            j--;
            continue;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
   result =arr.join('');
    return result;
};

console.log(reverseVowel('hello')); // Output: 'holle'
console.log(reverseVowel('leetcode')); // Output: 'leotcede'
console.log(reverseVowel('aA')); // Output: 'Aa'

// Time Complexity: O(n)
// Space Complexity: O(n)
// ✅ Hints: Create a set of vowels, convert the string to an array, and initialize two pointers at the start and end of the array. Iterate over the array and swap the vowels at the start and end of the array. Finally, return the array joined as a string.