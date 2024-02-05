const minWindow = (s, t) => {
    if (s.length < t.length) return '';
    let left = 0;
    let right = 0;
    let min = Infinity;
    let start = 0;
    let counter = t.length;
    let map = {};
    for (let char of t) {
        map[char] = map[char] + 1 || 1;
    }
    while (right < s.length) {
        if (map[s[right]] > 0) {
        counter--;
        }
        map[s[right]]--;
        right++;
        while (counter === 0) {
        if (right - left < min) {
            min = right - left;
            start = left;
        }
        if (map[s[left]] === 0) {
            counter++;
        }
        map[s[left]]++;
        left++;
        }
    }
    return min === Infinity ? '' : s.slice(start, start + min);
    }
    console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"
    console.log(minWindow("a", "a")); // "a"
    console.log(minWindow("a", "aa")); // ""