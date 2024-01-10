const reverse =(x) => {
    let result = 0;
    let isNegative = x < 0;
    x = Math.abs(x);
    while (x > 0) {
        result = result * 10 + x % 10; // 0 + 3 = 3, 30 + 2 = 32, 320 + 1 = 321
        x = Math.floor(x / 10); // 12, 1, 0
    }
    if (result > 2 ** 31 - 1) return 0; // 2 ** 31 - 1 = 2147483647
    return isNegative ? -result : result; // -321
};

console.log(reverse(123))//321
console.log(reverse(-123))//-321
console.log(reverse(120))//21

// time complexity: O(n)
// space complexity: O(1)

//✅ Beats 88.98% of users with JavaScript submissions