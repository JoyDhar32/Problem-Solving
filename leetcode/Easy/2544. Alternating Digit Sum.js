const alternateDigitSum = (n) => {
  let numsS= n.toString();
    let sum=0;
    for(let i=0; i<numsS.length; i++){
        if(i%2===0){
            sum+=parseInt(numsS[i]);
        }else{
            sum-=parseInt(numsS[i]);
        }
    }
    return sum;
};

console.log(alternateDigitSum(1234)); // -2
console.log(alternateDigitSum(123456)); // -3
console.log(alternateDigitSum(1234567)); // 4
console.log(alternateDigitSum(10)); // 1

// time complexity: O(n)
// space complexity: O(1)
// ✅ Hints: use a for loop to iterate through the string and add or subtract the digits based on the index

