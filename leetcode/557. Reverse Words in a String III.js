const reverseWords = (s) => {
    return s.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}
console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("MR Ding"));

// time complexity: O(n)
// space complexity: O(n)

// ✅ Beats 98.78%of users with JavaScript
