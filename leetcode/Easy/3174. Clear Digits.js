const clearDigits = (s) => {
let output = [];
for(let i=0; i<s.length; i++){
   if(!isNaN(s[i])) output.pop();
   else output.push(s[i]);
}
return output.join('');
}

console.log(clearDigits('abcd1234')); 
console.log(clearDigits('abcd1234efgh')); 
console.log(clearDigits('abcd1234efgh5678')); 

// time complexity: O(n)
// space complexity: O(1)
// ✅ Hints: use the isNaN() function to check if a character is a digit or not
