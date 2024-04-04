const maxDepth = (s)=>{
    let max = 0;
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            count++;
            max = Math.max(max, count);
        }else if(s[i] === ')'){
            count--;
        }
    }
    return max;
}

console.log(maxDepth("(1+(2*3)+((8)/4))+1")) // 3
console.log(maxDepth("(1)+((2))+(((3)))")) // 3
console.log(maxDepth("1+(2*3)/(2-1)")) // 1

// time complexity is O(n) where n is the length of the string.
// space complexity is O(1).
// ✅ Hints: Max Depth of Parentheses