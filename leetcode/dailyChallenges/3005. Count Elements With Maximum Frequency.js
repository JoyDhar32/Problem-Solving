const maxFrequencyElements = (nums) =>{
    const countMap = new Map();
    for (const num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    let maxFrequency = 0;
    for (const count of countMap.values()) {
        maxFrequency = Math.max(maxFrequency, count);
    }
    let result = 0;
    for (const count of countMap.values()) {
        if (count === maxFrequency) {
            result += count;
        }
    }
    return result;
}

console.log(maxFrequencyElements([1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // 10
console.log(maxFrequencyElements([1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12])); // 1

// time complexity: O(n)
// space complexity: O(n)
// ✅Hints: Array, Map