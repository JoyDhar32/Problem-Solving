const minRomoveToMakeValit = (s)=>{
    let stack = [];
    let arr = s.split('');
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '('){
            stack.push(i);
        }else if(arr[i] === ')'){
            if(stack.length === 0){
                arr[i] = '';
            }else{
                stack.pop();
            }
        }
    }
    while(stack.length > 0){
        arr[stack.pop()] = '';
    }
    return arr.join('');
}

console.log(minRomoveToMakeValit("lee(t(c)o)de)")) // "lee(t(c)o)de"
console.log(minRomoveToMakeValit("a)b(c)d")) // "ab(c)d"

// Time Complexity: O(n)
// Space Complexity: O(n)
// ✅ Hints: using Stack