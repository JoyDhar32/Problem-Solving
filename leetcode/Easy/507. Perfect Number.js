const perfectNumber = (num) => {
 
    if(num <= 0) return false;
    
    let sum = 0;
    for(let i = 1; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            sum += i;
            if(i !== num/i){
                sum += num/i;
            }
        }
    }
    return sum - num === num;
}

 console.log(perfectNumber(28)); // true

 // ✅ Hints: Using Sqrt function to reduce the time complexity of the code.