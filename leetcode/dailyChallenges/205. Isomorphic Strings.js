const isIsomorphic = (s, t) => {
    const map = new Map();
    const set = new Set();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
        if (map.get(s[i]) !== t[i]) return false;
        } else {
        if (set.has(t[i])) return false;
        map.set(s[i], t[i]);
        set.add(t[i]);
        }
    }
    return true;
    };

console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true

// time complexity is O(n) where n is the length of the string s.
// space complexity is O(n) where n is the length of the string s.
// ✅ Hints: String Manipulation