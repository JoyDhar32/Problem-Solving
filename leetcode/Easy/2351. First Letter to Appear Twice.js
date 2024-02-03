const repeatedCharacter = (s)=>{
    
let set = new Set();
for(let i=0;i<s.length;i++){
    if(set.has(s[i])) return s[i];
    else set.add(s[i]);
} 
    
}
console.log(repeatedCharacter("abcde")); // ""
console.log(repeatedCharacter("abccbaacz")); // "a"

// time complexity is O(n)
// space complexity is O(n)
//✅ Hints : Use Set to store the characters and check if the character is already present in the set. If it is present, return the character. If not, add the character to the set.