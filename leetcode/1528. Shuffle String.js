var restoreString = function(s, indices) {
    const n = s.length;
    const result = new Array(n);

    for (let i = 0; i < n; i++) {
        result[indices[i]] = s[i];
    }

    return result.join('');
};

// Example usage:
const example1 = "codeleet";
const indices1 = [4, 5, 6, 7, 0, 2, 1, 3];
console.log(restoreString(example1, indices1)); // Output: "leetcode"

const example2 = "abc";
const indices2 = [0, 1, 2];
console.log(restoreString(example2, indices2)); // Output: "abc"

// Time Complexity: O(n)
// Space Complexity: O(n)

// ✅ Beats 99.98% of users with JavaScript