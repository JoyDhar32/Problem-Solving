const replaceDigits = (s) => {
    for (let i = 1; i < s.length; i += 2) {
        let charCode = s.charCodeAt(i - 1) + parseInt(s[i]);
        
        s = s.substring(0, i) + String.fromCharCode(charCode) + s.substring(i + 1);
    }
    return s; 
}

console.log(replaceDigits("a1c1e1")); // Output: "abcdef"
console.log(replaceDigits("a1b2c3d4e")); // Output: "abbdcfdhe"
// Time Complexity: O(n)
// Space Complexity: O(n)

//  ✅ Hint: odd indices representing digits