const minOperations = (logs) => {
    let depth = 0;                                              // initialize the depth
    for (let i = 0; i < logs.length; i++) {                    // iterate through the logs
        if (logs[i] === '../') {                                // if the log is '../' 
            if (depth > 0) {                                        // if the depth is greater than 0 
                depth--;                                                                    // dec
            } else if (logs[i] !== './') {                      // if the log is not './' 
                depth++;                                       // increment the depth
            }
        }
    }
    return depth;                                       // return the depth
}

// Test cases
console.log(`Minimum number of operations required to reach the folder: ${minOperations(['d1/', 'd2/', '../', 'd21/', './'])}`); // 2
console.log(`Minimum number of operations required to reach the folder: ${minOperations(['d1/', 'd2/', './', 'd3/', '../', 'd31/'])}`); // 3
console.log(`Minimum number of operations required to reach the folder: ${minOperations(['d1/', '../', './', 'd2/'])}`); // 0

// Time complexity: O(n)
// Space complexity: O(1)
// ✅ Hint: Use a depth counter to find the minimum number of operations required to reach the folder