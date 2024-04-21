const length =(s) =>{
    s=s.trim();
    let count = 0;
    for(let i=s.length-1;i>=0;i--){
        if(s[i]===' ') break;
        count++;
    }
    return count;
}

console.log(length("Hello World")); // 5
console.log(length("a ")); // 1
console.log(length("a")); // 1
console.log(length(" ")); // 0

// time complexity: O(n)
// space complexity: O(1)
// ✅ Hint: Start from the end of the string and count the number of characters until you reach a space character.
// ✅ Beats 99.99% of JavaScript submissions in runtime


