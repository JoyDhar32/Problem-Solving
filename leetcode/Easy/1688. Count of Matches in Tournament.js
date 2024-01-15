const numberOfMatches =(n) => {
    let matches = 0;
    while (n > 1) {
        matches += Math.floor(n / 2);
        n = Math.ceil(n / 2);
    }
    return matches;
}
console.log(numberOfMatches(7)); // 6
console.log(numberOfMatches(14)); // 13
console.log(numberOfMatches(1)); // 0

// time complexity: O(n)
// space complexity: O(1)

// ✅ Beats 98.5% of users with JavaScript