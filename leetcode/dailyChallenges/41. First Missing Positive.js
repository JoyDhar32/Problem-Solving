const firstMissingPositive = (nums) => {
    let set = new Set(nums);
    let i = 1;
    while(set.has(i)) {
        i++;
    }
    return i;
}

console.log(firstMissingPositive([1,2,0])); // 3
console.log(firstMissingPositive([3,4,-1,1])); // 2
console.log(firstMissingPositive([7,8,9,11,12])); // 1
console.log(firstMissingPositive([1,1])); // 2

// Time Complexity: O(n)
// Space Complexity: O(n)
// ✅ Hints : Use a Set to find the Duplicate Numbers