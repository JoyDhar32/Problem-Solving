const vowelStrings = (words,left,right) => {
    let result=0;
    let set = new Set(['a','e','i','o','u']);
    for(let i=left;i<=right;i++){
        if(set.has(words[i][0])&&set.has(words[i].at(-1))) result++;
    }
    return result;
}
console.log(vowelStrings(["abc","def","ghi","jkl","mno"],0,2)); 
console.log(vowelStrings(["abc","def","ghi","jkl","mno"],1,3));

// Time Complexity: O(n)
// Space Complexity: O(n)
// ✅ Hint: Using Set to store the vowels and check if the first and last character of the word is in the set