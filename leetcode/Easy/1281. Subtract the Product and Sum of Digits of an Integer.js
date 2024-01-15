const subtractProductAndSum = (n) => {
    let product = 1;
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        product *= digit;
        sum += digit;
        n = Math.floor(n / 10);
    }
    return product - sum;
}
console.log(subtractProductAndSum(234)); // 15
console.log(subtractProductAndSum(4421)); // 21
console.log(subtractProductAndSum(705)); // -12
console.log(subtractProductAndSum(0)); // 0
console.log(subtractProductAndSum(1)); // 0

// time complexity: O(n)
// space complexity: O(1)

// ✅ Beats 98% of users with JavaScript