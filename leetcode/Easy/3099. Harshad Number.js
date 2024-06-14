const sumOfTheDigitsOfHarshadNumber = (x) => {

    const sumOfTheDigits = x.toString().split('').reduce((acc, cur) => acc + parseInt(cur), 0);
    if(x % sumOfTheDigits === 0) return sumOfTheDigits;
    return -1;
};

console.log(sumOfTheDigitsOfHarshadNumber(18)); // true
console.log(sumOfTheDigitsOfHarshadNumber(19)); // false
console.log(sumOfTheDigitsOfHarshadNumber(20)); // true

// time complexity: O(n)
// space complexity: O(1)
// ✅ Hints: use the modulo operator to check if the number is divisible by the sum of its digits
