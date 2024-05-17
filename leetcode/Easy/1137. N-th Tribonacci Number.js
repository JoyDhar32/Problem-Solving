const tribonacci = (n) => {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    let a = 0, b = 1, c = 1, d;
    for (let i = 3; i <= n; i++) {
        d = a + b + c;
        a = b;
        b = c;
        c = d;
    }
    return c;
};

console.log(tribonacci(4));//4
console.log(tribonacci(25));//1389537
console.log(tribonacci(37));//2082876103

// Time Complexity: O(n)
// Space Complexity: O(1) because we are not using any extra space to store the result
//✅ Hints: use the sort method to sort the array in ascending order