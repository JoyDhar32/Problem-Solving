var evalRPN = function (tokens) {
    const stack = [];

    for (const token of tokens) {
        if (isOperator(token)) {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            const result = performOperation(operand1, operand2, token);
            stack.push(result);
        } else {
            stack.push(parseInt(token));
        }
    }

    return stack.pop();
};

// Helper function to check if a token is an operator
const isOperator = (token) => {
    return token === '+' || token === '-' || token === '*' || token === '/';
};

// Helper function to perform arithmetic operations
const performOperation = (operand1, operand2, operator) => {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            return Math.trunc(operand1 / operand2); // Division truncates toward zero
        default:
            return 0;
    }
};

console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); // 22

// Time Complexity: O(n)
// Space Complexity: O(n)
// ✅ Hints: Using Stack
