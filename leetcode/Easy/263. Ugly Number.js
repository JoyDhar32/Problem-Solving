//An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5

const isUgly = (n)=>{
let primes = [2, 3, 5];
if (n ===1) return true;
if (n === 0) return false;
for (let prime of primes){
    while (n % prime === 0){
        n /= prime;
    }
}
return n === 1;
}
console.log(isUgly(6)); // true
console.log(isUgly(8)); // true
console.log(isUgly(14)); // false
console.log(isUgly(1)); // true

// Time complexity: O(n)
// Space complexity: O(1)
// Hint:  ✅Math