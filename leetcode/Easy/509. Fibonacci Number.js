const fib = (n) =>{
    let result = 1;
    let prev = 0;
    let temp;
    if(n===0) return 0;
    if(n===1) return 1;
    for(let i=2;i<=n;i++){
        temp = result;
        result = result + prev;
        prev = temp;
    }
    return result;
}
console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3
console.log(fib(5)); // 5
console.log(fib(6)); // 8

// ✅ Time Complexity: O(n)
// ✅ Space Complexity: O(1)

// ✅ Hints :  Use Dynamic Programming to find the fibonacci number