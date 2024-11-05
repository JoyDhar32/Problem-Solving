const generateKey = (num1, num2, num3) => {
    let str1 = num1.toString();
    let str2 = num2.toString();
    let str3 = num3.toString();

    // Manually pad with leading zeros
    while (str1.length < 4) str1 = '0' + str1;
    while (str2.length < 4) str2 = '0' + str2;
    while (str3.length < 4) str3 = '0' + str3;

    let key = '';

    // Iterate through each digit position
    for (let i = 0; i < 4; i++) {
        // Find the smallest digit among the three numbers at the current position
        const minDigit = Math.min(str1[i], str2[i], str3[i]);
        key += minDigit;
    }

    return parseInt(key, 10);
};

console.log(generateKey(1, 10, 1000)); // 0
console.log(generateKey(987, 879, 798)); // 777
console.log(generateKey(1234, 5678, 9101)); // 1231

// Time Complexity: O(1) since the length of the strings is fixed at 4
// Space Complexity: O(1) since we are using a constant amount of space

//✅ Hints: The key is formed by taking the smallest digit at each position from the three numbers.