const findPermutationDifference = (s, t) => {
let result=0;
let len=s.length;
for(let i=0;i<len;i++){
   let sec=t.indexOf(s[i]);
    result += Math.abs(i-sec);
}
return result;
}

console.log(findPermutationDifference("abc", "bac")); // 0
console.log(findPermutationDifference("abc", "bca")); // 2
console.log(findPermutationDifference("abc", "cab")); // 3

// Time Complexity: O(n^2)
// Space Complexity: O(1) because we are not using any extra space
// ✅ Hints: using indexOf function