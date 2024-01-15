const maximum69Number = (num) => {
    return Number(num.toString().replace('6', '9')); // replace only the first 6

    // for replacing all 6 to 9 
    // return Number(num.toString().replace(/6/g, '9'));
}
console.log(maximum69Number(9669))//9969
console.log(maximum69Number(9996))//9999
console.log(maximum69Number(9999))//9999
console.log(maximum69Number(6))//9
console.log(maximum69Number(9))//9
console.log(maximum69Number(66))//96

// time complexity: O(n)
// space complexity: O(n)


