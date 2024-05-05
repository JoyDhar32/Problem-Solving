const removeDuplicates = (nums) => {
    let i = 0;
    
    for (let num of nums) {
        if (i < 2 || num > nums[i - 2]) {
            nums[i] = num;
            i++;
        }
    }
    
    return i;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3])); // 5
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])); // 7
console.log(removeDuplicates([1, 1, 1])); // 2

// time complexity: O(n)
// space complexity: O(1)
// ✅ Hint: Use two pointers to iterate through the array. Use a counter to keep track of the number of duplicates. If the current number is not a duplicate, update the array with the current number and increment the counter. Return the counter.