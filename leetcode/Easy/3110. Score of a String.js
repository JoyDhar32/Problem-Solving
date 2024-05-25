const scoreOfString = (s)=>{
    let result =0;
    let len=s.length;
    for(let i=1;i<len;i++){
        result += Math.abs([s.charCodeAt(i)]-[s.charCodeAt(i-1)]);
    }
    return result;
}

console.log(scoreOfString("aba"));//2
console.log(scoreOfString("hello")); 
// Time Complexity: O(n)
// Space Complexity: O(1) because we are not using any extra space
// ✅ Hints: using charCodeAt function