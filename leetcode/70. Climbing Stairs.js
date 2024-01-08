const climbStairs = (n)=>{
    if(n<=2) return n; 
    let a=1;
    let b=2;
    for(let i=3;i<=n;i++){
        let presentStep=a+b;
        a=b;
        b=presentStep;
    }
    return b;
}
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5

// time complexity: O(n)
// space complexity: O(1)

// ✅ Beats 100% of JavaScript submissions in runtime
 /*
 Example: n=4
Initialization:
a (prev1) is initialized to 1.
b (prev2) is initialized to 2.

First Iteration (i = 3):
Calculate presentStep as the sum of a and b: presentStep = 1 + 2 = 3.
Update a (prev1) to the value of b for the next iteration: a = 2.
Update b (prev2) to the value of presentStep for the next iteration: b = 3.

Second Iteration (i = 4):
Calculate presentStep as the sum of a and b: presentStep = 2 + 3 = 5.
Update a (prev1) to the value of b for the next iteration: a = 3.
Update b (prev2) to the value of presentStep for the next iteration: b = 5.

Result:
After the loop, the final result is stored in b, which is 5.
*/

