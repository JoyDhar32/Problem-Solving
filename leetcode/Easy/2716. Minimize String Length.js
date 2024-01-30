//https://leetcode.com/problems/minimize-string-length/solutions/4648063/just-using-map-beats-97-77-of-users-with-javascript/
const minimizedStringLength = (s) => {
    let result = new Set(s);
    return result.size;
}
console.log(minimizedStringLength("ababcbacadefegdehijhklij")); // 11
console.log(minimizedStringLength("abcabc")); // 3
console.log(minimizedStringLength("aaabc")); // 3
console.log(minimizedStringLength("cbbd")); // 0
console.log(minimizedStringLength("dddaaa")); // 11

// Time Complexity: O(n)
// Space Complexity: O(n)
// ✅ Hint: Use Set to remove duplicates