const fairCandySwap =(aliceSizes, bobSizes) => {
    let sumA = aliceSizes.reduce((a, b) => a + b); 
    let sumB = bobSizes.reduce((a, b) => a + b);
    let diff = (sumA - sumB) / 2;
    let set = new Set(aliceSizes);
    for (let i = 0; i < bobSizes.length; i++) {
        let target = bobSizes[i] + diff;
        if (set.has(target)) {
            return [target, bobSizes[i]];
        }
    }
    return [];
}   

// Test cases
console.log(fairCandySwap([1, 1], [2, 2])); // [1, 2]
console.log(fairCandySwap([1, 2], [2, 3])); // [1, 2]
console.log(fairCandySwap([2], [1, 3])); // [2, 3]

// Time Complexity: O(n + m) where n is the number of elements in the array aliceSizes and m is the number of elements in the array bobSizes
// Space Complexity: O(n) for storing the elements of the array aliceSizes in a set

// ✅Hints: Calculate the sum of the elements in both arrays. Find the difference between the two sums and divide it by 2. Store the elements of the array aliceSizes in a set. Iterate through the elements of the array bobSizes and check if the target element (bobSizes[i] + diff) is present in the set. If it is, return the target element and bobSizes[i]. If no such pair exists, return an empty array.