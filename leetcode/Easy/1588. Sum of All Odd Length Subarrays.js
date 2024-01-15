const sumOddLengthSubarrays = (arr) => {
    const n = arr.length;
    let result = 0;

    for (let i = 0; i < n; i++) {
        result += Math.ceil((i + 1) * (n - i) / 2) * arr[i];
    }

    return result;
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3])); // Output: 58
console.log(sumOddLengthSubarrays([1, 2])); // Output: 3
console.log(sumOddLengthSubarrays([10, 11, 12])); // Output: 66
// time complexity: O(n)
// space complexity: O(1)

// ✅ Beats 90.99% of users with JavaScript