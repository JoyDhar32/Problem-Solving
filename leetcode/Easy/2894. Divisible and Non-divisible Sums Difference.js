const differenceOfSums = (n, m) => {
    let num1 = 0, num2 = 0;
    for (let i = 1; i <= n; i++)  (i % m !== 0) ? num1 += i : num2 += i;
    return (num1 - num2)
}
console.log(differenceOfSums(10, 3))// 19
console.log(differenceOfSums(5, 6))// 30
console.log(differenceOfSums(10, 1))// 0
console.log(differenceOfSums(10, 5))// 5
console.log(differenceOfSums(10, 4))// 10

// time complexity is O(n) 
// space complexity is O(1)
// ✅ Hints: Using Turnery Operator and For Loop to solve the problem