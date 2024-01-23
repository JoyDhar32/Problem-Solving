const generateTheString = (n) => {
    return n % 2 === 0 ? 'a'.repeat(n - 1) + 'b' : 'a'.repeat(n);
};
console.log(generateTheString(4)); // "aaab"
console.log(generateTheString(2)); // "ab"
console.log(generateTheString(7)); // "aaaaaaa"
console.log(generateTheString(1)); // "a"

// ✅ Beats 100%of users with JavaScript