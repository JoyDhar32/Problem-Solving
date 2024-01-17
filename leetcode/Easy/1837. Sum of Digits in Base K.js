const sumBase = (n, k) => {
    let sum = 0;
    while (n > 0) {
        sum += n % k;
        n = ~~(n / k);
    }
    return sum;
    }

console.log(sumBase(34, 6)); // 9
console.log(sumBase(10, 10)); // 1
console.log(sumBase(42, 2)); // 3
console.log(sumBase(68, 2)); // 5

// ✅ Beats 100% of users with JavaScript