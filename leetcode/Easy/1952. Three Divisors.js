const isThree = (n) => {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    return (count === 3);
}

console.log(isThree(2)) // false
console.log(isThree(4)) // true
console.log(isThree(12)) // false

// time complexity: O(n)
// space complexity: O(1)
// ✅ Hint: Prime Factorization