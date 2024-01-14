const maxFrequencyElements =(nums)=>{
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

console.log(maxFrequencyElements([1, 2, 2, 3, 3, 3])); // Output: [3]
console.log(maxFrequencyElements([1,2,2,3,1,4])); // Output: [3]
console.log(maxFrequencyElements([1,2,3,4,5])); // Output: [1,2]