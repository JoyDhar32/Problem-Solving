const maximumOddBinaryNumber = (s) => {
    let conv = s.split('').sort((a, b) => (b - a));
    conv.shift();
    conv.push('1');
    return conv.join('');

}
console.log(maximumOddBinaryNumber("1101"))//1011
console.log(maximumOddBinaryNumber("1100"))//1100
console.log(maximumOddBinaryNumber("110"))//110

// time complexity is O(nlogn)
// space complexity is O(n)
// ✅ Hints : Sort the binary string in descending order and then replace the first 0 with 1.