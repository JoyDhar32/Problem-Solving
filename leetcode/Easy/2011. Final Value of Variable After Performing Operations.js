const finalVallueAfterOperations = (operations) => {
    //   let x = 0;
    //   operations.forEach((operation) => {
    //     if (operation === "++X" || operation === "X++") {
    //       x++;
    //     } else {
    //       x--;
    //     }
    //   });
    //   return x;
    let x = 0;
    for (let operation of operations) {
        if (operation === "++X" || operation === "X++") {
            x++;
        }

        else {
            x--;
        };
    }
    return x;
}

console.log(finalVallueAfterOperations(["--X", "X++", "X++"])); // Output: 1
console.log(finalVallueAfterOperations(["++X", "++X", "X++"])); // Output: 3
console.log(finalVallueAfterOperations(["X++", "++X", "--X", "X--"])); // Output: 0

// Time Complexity: O(n)
// Space Complexity: O(1)

// ✅