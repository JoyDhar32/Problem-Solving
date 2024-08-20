const removeStars = (s) => {
    let result = [];
    let len = s.length;
    for (let i = 0; i < len; i++) {
        if (s[i] !== '*') result.push(s[i]);
        else result.pop();
    }
    let finalRes = result.join('');
    return finalRes;
}

// Time complexity: O(n)
// Space complexity: O(n)
// ✅ Hints: Using Stack | 64 ms Beats 99.45%
