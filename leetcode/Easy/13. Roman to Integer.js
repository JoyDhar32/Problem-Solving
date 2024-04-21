const romanToInt =(s)=>{
    let roman={    // roman numeral to integer mapping  
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    let result=0;
for(let i=0;i<s.length;i++){
    const current=roman[s[i]]; // current number to access the object variable[key]
    const next=roman[s[i+1]]; // next number 
    if(next>current){         // in roman numeral, if next number is greater than current number, then subtract current number from next number
        result+=next-current; // IX = 10-1 = 9
        i++;
    }
    else{
        result+=current; 
    }
}
return result; 
}

console.log(romanToInt('III')); // 3
console.log(romanToInt('IV')); // 4
console.log(romanToInt('IX')); // 9
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994


// time complexity: O(n)
// space complexity: O(1)
// ✅ Hint: Use the object to map roman numerals to integers. If the next number is greater than the current number, subtract the current number from the next number. Otherwise, add the current number to the result.

// ✅ Beats 88.99% of JavaScript submissions in runtime