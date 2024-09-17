const reverseStr =(s,k)=>{
s = s.split('');
for(let i = 0; i < s.length; i += 2*k){
    let start = i;
    let end = Math.min(i+k-1, s.length-1);
    while(start < end){
        let temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    }
}
return s.join('');
}

console.log(reverseStr('abcdefg', 2)); // "bacdfeg"
console.log(reverseStr('abcd', 2)); // "bacd"
console.log(reverseStr('abcdefg', 3)); // "cbadefg"

// Time Complexity: O(n)
// Space Complexity: O(n)
// ✅Hints: using two pointers to loop through the string and reverse the string in k size.

/* Explanation:
1. Convert the string to an array.
2. Loop through the string by incrementing by 2k.
3. Set the start and end pointers.
4. Loop through the string from start to end and swap the characters.
5. Join the array and return the result.
*/