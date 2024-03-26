const missingPositive = (nums) => {
    let set = new Set(nums);
    let i = 1;
    while (set.has(i)) {
        i++;
    }
    return i;
}

console.log(missingPositive([1, 2, 0])); // 3
console.log(missingPositive([3, 4, -1, 1])); // 2
console.log(missingPositive([7, 8, 9, 11, 12])); // 1

// Time Complexity: O(n)
// Space Complexity: O(n)
// ✅ Hints : Use a Set to find the Duplicate Numbers