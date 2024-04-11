const removeKdigits = (num,k)=>{
    let stack = [];
    for(let i=0;i<num.length;i++){
        while(stack.length>0 && stack[stack.length-1]>num[i] && k>0){
            stack.pop();
            k--;
        }
        stack.push(num[i]);
    }
    while(k>0){
        stack.pop();
        k--;
    }
    let result = stack.join('').replace(/^0+/, '');
    return result===''?'0':result;
}

console.log(removeKdigits("1432219",3));//1219
console.log(removeKdigits("10200",1));//200
console.log(removeKdigits("10",2));//0

// time complexity: O(n)
// space complexity: O(n)
// ✅ Hints : Use a Stack to find the Smallest Number