const reverseWords = (s) => {
    return s.split(' ').filter((word) => word !== '').reverse().join(' ');
};

// test cases
console.log(reverseWords("the sky is blue")); // "blue is sky the"
console.log(reverseWords("  hello world  ")); // "world hello"
console.log(reverseWords("a good   example")); // "example good a"

// Time complexity: O(n)
// Space complexity: O(n)
// ✅ Hint: Use split, filter, reverse, and join to reverse the words in a string

// Another solution using two pointers

const reverseWordsTwoPointer = (s) => {
    let left = 0;
    let right = s.length - 1;
    let words = [];
    let word = '';
    while (s[left] === ' ') left++;
    while (s[right] === ' ') right--;
    while (left <= right) {
        if (s[left] !== ' ') {
            word += s[left];
        } else if (word) {
            words.unshift(word);
            word = '';
        }
        left++;
    }
    words.unshift(word);
    return words.join(' ');
};

// test cases
console.log(`Two pointer solution`);
console.log(reverseWordsTwoPointer("the sky is blue")); // "blue is sky the"
console.log(reverseWordsTwoPointer("             hello world     ")); // "world hello"

// Time complexity: O(n)
// Space complexity: O(n)
// ✅ Hint: Use two pointers to iterate through the string and reverse the words in a string

// Another solution 

const reverseWordsThree = (s) => {
    
        let result=[];
         s=s.split(' ');
        let len=s.length-1;
        for(let i=len;i>=0;i--){
            if(s[i]!==''){
                result.push(s[i]);
            }
        }
        return result.join(' ');
    };

// test cases
console.log(`Three pointer solution`);
console.log(reverseWordsThree("the sky is blue")); // "blue is sky the"
console.log(reverseWordsThree("             hello world     ")); // "world hello"

// Time complexity: O(n)
// Space complexity: O(n)
// ✅ Hint: Use split, join, and a for loop to reverse the words in a string
    