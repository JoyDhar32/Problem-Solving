const firstPalindrome =(words) =>{
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        console.log(`word is ${word}`); // Seperate each word
        let reverseWord = word.split('').reverse().join(''); // Reverse the word and join it back together
        if(word === reverseWord){
            return word;
        }
    }
    return "";
}

console.log(firstPalindrome(["abc","car","ada","racecar","cool"])); // ["a","aba"]
console.log(firstPalindrome(["notapalindrome","racecar"])); // ["a","aba"]

// time complexity: O(n)
// space complexity: O(n)

// ✅ Beats 100% of users with JavaScript
