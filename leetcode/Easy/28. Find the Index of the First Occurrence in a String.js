const strStr = (haystack, needle) => {
    if (needle === '') return 0;
    if (haystack === '') return -1;

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            if (haystack.slice(i, i + needle.length) === needle) return i;
        }
    }

    return -1;
}

console.log(strStr('hello', 'll'));//2
console.log(strStr('aaaaa', 'bba'));//-1
console.log(strStr('', ''));//0

// Time Complexity: O(n)
// Space Complexity: O(1) because we are not using any extra space to store the result
// ✅ Hints: use the sort method to sort the array in ascending order