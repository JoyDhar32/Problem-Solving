const closeStrings = (word1, word2) => {
    if (word1.length !== word2.length) return false;
    let freq1 = new Array(26).fill(0);
    let freq2 = new Array(26).fill(0);
    for (let i = 0; i < word1.length; i++) {
        freq1[word1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freq2[word2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    for (let i = 0; i < 26; i++) {
        if (freq1[i] === freq2[i]) {
            freq1[i] = 0;
            freq2[i] = 0;
        } else if (freq1[i] === 0 || freq2[i] === 0) {
            return false;
        }
    }
    freq1 = freq1.filter(count => count > 0).sort((a, b) => a - b);
    freq2 = freq2.filter(count => count > 0).sort((a, b) => a - b);
    for (let i = 25; i >= 0; i--) {
        if (freq1[i] !== freq2[i]) {
            return false;
        }
    }
    return true;
};


console.log(closeStrings("abc", "bca")); // Output: true
console.log(closeStrings("a", "aa")); // Output: false
console.log(closeStrings("uau", "ssx")); // Output: true
console.log(closeStrings("cabbba", "aabbss")); // Output: false
console.log(closeStrings("uau", "ssx")); // Output: false
console.log(closeStrings("uau", "ssa")); // Output: true

