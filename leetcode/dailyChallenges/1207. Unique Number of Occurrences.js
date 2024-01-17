const uniqueOccurrences=(arr) =>{
    const frequencyMap = new Map();

    for (const num of arr) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    const uniqueFrequencies = new Set(frequencyMap.values());

    return uniqueFrequencies.size === frequencyMap.size;  
}

console.log(uniqueOccurrences([1,2,2,1,1,3])); // Output: true
console.log(uniqueOccurrences([1,2])); // Output: false
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0])); // Output: true

// ✅ Hints: Use an object to count the frequency of each element.

// ✅ Map