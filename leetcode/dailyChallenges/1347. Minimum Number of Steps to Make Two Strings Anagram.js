const minSteps = (s, t) => {
    const charCount = new Array(26).fill(0);

    for (let char of s) {
        charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (let char of t) {
        charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }

    return charCount.reduce((acc, count) => acc + Math.abs(count), 0) / 2;

}
console.log(minSteps("bab","aba")); // 1
console.log(minSteps("leetcode","practice")); // 5
console.log(minSteps("anagram","mangaar")); // 0
console.log(minSteps("xxyyzz","xxyyzz")); // 0
console.log(minSteps("friend","family")); // 4
// time complexity: O(n)
// space complexity: O(n)

// ✅  Beats 89.53% of users with JavaScript