const calPoints = (operations) => {
    const stack = [];
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === 'C') {
            stack.pop();
        } else if (operations[i] === 'D') {
            stack.push(stack[stack.length - 1] * 2);
        } else if (operations[i] === '+') {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        } else {
            stack.push(+operations[i]);
        }
    }
    return stack.reduce((acc, cur) => acc + cur, 0);
};

console.log(calPoints(["5", "2", "C", "D", "+"])); // 30
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])); // 27
console.log(calPoints(["1"])); // 1

// Time Complexity: O(n)
// Space Complexity: O(n) because we are using stack array
// ✅ Hints: using stack array to store the points