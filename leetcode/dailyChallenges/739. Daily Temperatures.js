const dailyTemperatures = (temperatures) => {
    const stack = [];
    const result = new Array(temperatures.length).fill(0);
    
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
        const top = stack.pop();
        result[top] = i - top;
        }
        stack.push(i);
    }
    
    return result;
    };

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1, 1, 4, 2, 1, 1, 0, 0]
console.log(dailyTemperatures([30, 40, 50, 60])); // [1, 1, 1, 0]
console.log(dailyTemperatures([30, 60, 90])); // [1, 1, 0]

// Time Complexity: O(n)
// Space Complexity: O(n)
// ✅ Hint: Use Stack to store the index of the temperature