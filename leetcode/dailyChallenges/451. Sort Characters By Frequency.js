const frequencySort = (s) => {
    const freq = {};
    for (let i = 0; i < s.length; i++) {
        freq[s[i]] = freq[s[i]] + 1 || 1;
    }
    return Object.entries(freq)
        .sort((a, b) => b[1] - a[1])
        .map((a) => a[0].repeat(a[1]))
        .join("");
    }
console.log(frequencySort("tree")); // eert
console.log(frequencySort("cccaaa")); // aaaccc
console.log(frequencySort("Aabb")); // bbAa
console.log(frequencySort("loveleetcode")); // eeeoollvtdc

// Time Complexity: O(nlogn)
// Space Complexity: O(n)
// ✅ Hint: Sort the array and then divide it into arrays with max difference k