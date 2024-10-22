const findTheDifference = (s, t) => { 
    let lenS=s.length; // get the length of s
for(let i = 0; i < lenS; i++) {  // iterate through the length of s
    t=t.replace(s[i], ''); // replace the first occurrence of s[i] in t with an empty string  
    };
    return t;
};

console.log(findTheDifference('abcd', 'abcde')); // e
console.log(findTheDifference('', 'y')); // y
console.log(findTheDifference('a', 'aa')); // a
console.log(findTheDifference('ae', 'aea')); // a

// ✅ Hints: using replace() method to replace the first occurrence of s[i] in t with an empty string | Runtime: 72 ms, faster than 97.14% of 
