const canMakeSubsequence = (str1, str2) => {
    let j = 0;

    for (let i = 0; i < str2.length; i++) {
        while (j < str1.length && str1[j] !== str2[i] && String.fromCharCode((str1.charCodeAt(j) - 97 + 1) % 26 + 97) !== str2[i]) {
            j++;
        }
        if (j === str1.length) {
            return false;
        }
        j++;
    }

    return true;
};

// Test cases
console.log(canMakeSubsequence('abc', 'ad')); // true
console.log(canMakeSubsequence('zc', 'ad')); // true
console.log(canMakeSubsequence('ab', 'd')); // false

// Time Complexity: O(n + m) where n is the length of str1 and m is the length of str2
// Space Complexity: O(1) since we are not using any extra space