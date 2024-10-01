const isPowerofThree = (n)=>{
    if(n<=0) 
        return false; 
    while(n>1){
        n =n/3;
    } 
    let output=(n==1);
    return output;  
}

console.log(isPowerofThree(27));
console.log(isPowerofThree(21));
console.log(isPowerofThree(15));
console.log(isPowerofThree(12));
console.log(isPowerofThree(1));

// ✅ Hints: Divided by 3 until input gets below 1 | Beats 84%
