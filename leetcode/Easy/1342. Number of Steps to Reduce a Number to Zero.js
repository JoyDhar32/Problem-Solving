const numberOfSteps = (num) => {
    let count = 0;
    while (num > 0) {
        if (num % 2 === 0) {
            num /= 2;
        } else {
            num -= 1;
        }
        count++;
    }
    return count;
};
console.log(numberOfSteps(14)); // 6
console.log(numberOfSteps(8)); // 4
console.log(numberOfSteps(123)); // 12

// Time Complexity: O(log(n))
// Space Complexity: O(1) because we are not using any extra space

// ✅ Hints: using % operator