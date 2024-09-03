const getLucky = (s, k) => {
    s=s.toLowerCase();
    let inputLength=s.length;
    let refStr='';
    for(let i=0;i<inputLength;i++){
        refStr+= (s.charCodeAt(i)-96);
    }
    // console.log(refStr);
    
    while(k>0){
        let sum=0;
        let refStrLength=refStr.length;
        for(let i=0;i<refStrLength;i++){
            sum+=parseInt(refStr[i]);
        }
        // console.log(sum);
        refStr=sum.toString();
        // console.log(refStr);
        k--;
    }
    let result=parseInt(refStr);
    return result;
}

console.log(getLucky("ii", 1)) // 36
console.log(getLucky("leetcode", 2)) // 6
console.log(getLucky("zbax", 2)) // 8
console.log(getLucky("a", 1000000000)) // 0

/*
charCodeAt: will return the ASCII value of the character at the specified index
parseInt: will convert the string to integer
toString: will convert the integer to string
*/

// Time Complexity: O(n) where n is the length of the string
// Space Complexity: O(n) where n is the length of the string
// ✅ Hints: Use ASCII values to convert the string to numbers and then perform the operations on the numbers to get the desired result.