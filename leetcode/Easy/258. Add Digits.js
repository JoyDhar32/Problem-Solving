const addDigits =(num)=>{
    if(num==0) return 0;
   return num%9==0?9:num%9;
}

console.log(addDigits(38));//2
console.log(addDigits(0));//0
console.log(addDigits(9));//9
console.log(addDigits(5));//9

// Time Complexity: O(1)
// Space Complexity: O(1)
//✅ Hints: using if condition only