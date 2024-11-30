var detectCapitalUse = function(word) {
    let output=0;
    let len=word.length;
    for(let i=0;i<len;i++){
        word[i]===word[i].toUpperCase()?output++:''
    }
    return ((output===0)|| (output===len)||((output===1)&&(word[0]===word[0].toUpperCase())));
};

// Test cases

console.log(detectCapitalUse("USA")); // true
console.log(detectCapitalUse("FlaG")); // false
console.log(detectCapitalUse("leetcode")); // true

// Time Complexity: O(n) where n is the length of the input string
// Space Complexity: O(1) for the output variable
// ✅ 0ms Beats 100.00% | This is a simple problem. Count the number of capital letters in the input string. Check if the count is equal to the length of the string or if the count is zero. If either condition is true, return true. Check if the count is one and the first letter of the string is a capital letter. If this condition is true, return true. Otherwise, return false.