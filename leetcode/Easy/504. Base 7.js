const convertToBase7 = (num) => {
    let isNegative = (num<0);
    let result='';
    num=Math.abs(num);
    if (num==0) return '0';
    while(num>0){
        result=(num%7)+result;
        num=Math.floor(num/7);
    }
    result= isNegative?'-'+result:result;
    return result;
};

// Test cases
console.log(convertToBase7(100)); // "202"
console.log(convertToBase7(-7)); // "-10"
console.log(convertToBase7(0)); // "0"
console.log(convertToBase7(7)); // "10"

// Time Complexity: O(log n) where n is the input number
// Space Complexity: O(1) for the result string
// ✅ 0ms Beats 100.00% | This is a simple math problem. Use the modulo operator to get the remainder when dividing the number by 7. Append the remainder to the result string. Divide the number by 7 and repeat the process until the number becomes zero. Return the result string. Handle the negative case separately.