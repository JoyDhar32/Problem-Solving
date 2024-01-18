const climbStairs = (n) => {
    let a = 1, b = 1;
    while (n--) {
        b += a;
        a = b - a;
    }
    return a;
}

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5

// ✅ Beats 100% of users with JavaScript