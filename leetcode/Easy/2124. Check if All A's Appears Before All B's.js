const checkString = (s) => {
let len=s.length;
let countb=0;
for(let i=0;i<len;i++){
    if(s[i]==="a" && countb===1) return false;
    if(s[i]==="b") countb=1;
}
return true;
};

// Test cases
console.log(checkString("ab")); // true
console.log(checkString("ba")); // false
console.log(checkString("aab")); // true
console.log(checkString("bba")); // false
console.log(checkString("aaaaab")); // true
console.log(checkString("abbbbb")); // true
console.log(checkString("baaaaa")); // false

// time complexity: O(n)
// space complexity: O(1) because we are using only 2 variables
// ✅ Hints: using a variable to check if b is present after a
