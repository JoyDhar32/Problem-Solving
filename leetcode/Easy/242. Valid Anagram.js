const isAnagram = (s, t) => {
    if(s.length !== t.length) return false;
let sortS=s.split('').sort().join('');
let sortT=t.split('').sort().join('');
return sortS===sortT;
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("a", "ab")); // false

// time complexity: O(nlogn)
// space complexity: O(1)
// ✅ Hints: sort the strings and compare them

