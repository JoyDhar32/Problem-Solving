const makeGood =(s)=>{
    let stack = []
    for(let i=0; i<s.length; i++){
        if(stack.length && Math.abs(stack[stack.length-1].charCodeAt(0) - s[i].charCodeAt(0)) === 32){
            stack.pop()
        }else{
            stack.push(s[i])
        }
    }
    return stack.join('') 
}
console.log(makeGood("leEeetcode")) // "leetcode"
console.log(makeGood("abBAcC")) // ""


// Time Complexity: O(n)
// Space Complexity: O(n)
// ✅ Hints: using Stack