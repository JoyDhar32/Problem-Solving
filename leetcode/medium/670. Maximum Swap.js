const maximumSwap = (num) => {
    const numArr = num.toString().split('');
    const numArrCopy = [...numArr];
    const sortedArr = [...numArr].sort((a, b) => b - a);

    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] !== sortedArr[i]) {
            const index = numArr.lastIndexOf(sortedArr[i]);
            [numArr[i], numArr[index]] = [numArr[index], numArr[i]];
            break;
        }
    }

    return parseInt(numArr.join(''), 10);
};

// Test cases
console.log(maximumSwap(2736)); // 7236
console.log(maximumSwap(9973)); // 9973
console.log(maximumSwap(1234)); // 4231
console.log(maximumSwap(98368)); // 98863

// Time Complexity: O(n log n) due to sorting
// Space Complexity: O(n) for storing the arrays
// ✅ Hints: Convert the number to an array of digits. Create a copy of the array and sort it in descending order. Iterate through the original array and compare each digit with the corresponding digit in the sorted array. If they are different, find the last occurrence of the digit in the original array and swap the two digits. Convert the modified array back to a number and return it.