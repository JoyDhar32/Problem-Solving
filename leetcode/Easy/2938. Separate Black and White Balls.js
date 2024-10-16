const minimumSteps = (s) => {
let output = 0;
let black = 0;
for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') {
        output += black;
    } else {
        black++;
    }
}
return output;
};

console.log(minimumSteps('100'))
console.log(minimumSteps('110'))
console.log(minimumSteps('101'))
console.log(minimumSteps('001011'))

// Time Complexity: O(n)
// Space Complexity: O(1)
// ✅ Hints: Count the number of black and white balls | Beat 100% of Leetcode submissions