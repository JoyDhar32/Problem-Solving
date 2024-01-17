const commonFactors = (a, b) => {
    let count = 0;
    for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) count++;
    }
    return count;
    }

console.log(commonFactors(12, 6)); // Output: 4
console.log(commonFactors(25, 30)); // Output: 2
console.log(commonFactors(5, 5)); // Output: 1
console.log(commonFactors(1, 1)); // Output: 1
console.log(commonFactors(0, 1)); // Output: 1
console.log(commonFactors(0, 0)); // Output: 0

// ✅ Hints: use Math.min() to find the smaller number. Then, use a for loop to iterate from 1 to the smaller number. If both numbers are divisible by the current number, increment the count. Finally, return the count.