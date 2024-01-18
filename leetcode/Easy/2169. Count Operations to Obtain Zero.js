const countOperations =(num1,num2) =>{
    let result =0;
    while(num1>0&&num2>0){
        if(num1>num2){
            num1=num1-num2;
        }
        else{
            num2=num2-num1;
        }
        result++;
    }
    return result;
}
console.log(countOperations(5,9)); // 3
console.log(countOperations(9,5)); // 3
console.log(countOperations(1,1)); // 1
console.log(countOperations(2,3)); // 0
console.log(countOperations(10,10)); // 0

// ✅ Hints: substract the smaller number from the larger number until one of them becomes 0