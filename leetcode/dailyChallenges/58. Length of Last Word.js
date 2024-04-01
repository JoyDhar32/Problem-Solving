const lengthOfLastWord =(s)=>{
    let arr = s.trim().split(" ");
    return arr[arr.length-1].length;
}

console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("Hello Joy ")); // 3
console.log(lengthOfLastWord("Hello Bijoy  ")); // 5

// time complexity is O(n) where n is the length of the string s.
// space complexity is O(n) where n is the length of the string s.
// ✅ Hints: String Manipulation