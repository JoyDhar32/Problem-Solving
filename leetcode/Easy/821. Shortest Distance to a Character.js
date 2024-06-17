const shortestToChar = (s, c) => {
    const result = [];
    let prev = -Infinity;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
        prev = i;
        }
        result.push(i - prev);
    }
    
    prev = Infinity;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === c) {
        prev = i;
        }
        result[i] = Math.min(result[i], prev - i);
    }
    
    return result;
    };

    console.log(shortestToChar("loveleetcode", "e")); // [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
    console.log(shortestToChar("aaab", "b")); // [3, 2, 1, 0]
    console.log(shortestToChar("aaab", "a")); // [0, 0, 0, 1]

    // time complexity: O(n)
    // space complexity: O(n)
    // ✅ Hints: use two passes to find the shortest distance to the character c