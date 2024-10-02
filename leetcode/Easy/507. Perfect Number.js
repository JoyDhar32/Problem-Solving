const perfectNumber = (num) => {
    let sum=1;
    if(num==1) return false;

    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            sum+=i;
        }
        if(i*i!==num) sum+=num/i;
    }
    let output =(num==sum);
    return output;
}

 console.log(perfectNumber(28)); // true

 // ✅ Hints: Using Sqrt function to reduce the time complexity of the code.