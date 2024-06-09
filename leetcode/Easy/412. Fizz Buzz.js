const fizzBuzz = (n) => {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) result.push('FizzBuzz');
        else if (i % 3 === 0) result.push('Fizz');
        else if (i % 5 === 0) result.push('Buzz');
        else result.push(i.toString());
    }
    return result;
};

console.log(fizzBuzz(15)); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
console.log(fizzBuzz(1)); // ["1"]
console.log(fizzBuzz(2)); // ["1","2"]
console.log(fizzBuzz(3)); // ["1","2","Fizz"]

// time complexity: O(n)
// space complexity: O(n)
// ✅ Hints: use the modulo operator to check if the number is divisible by 3, 5, or both