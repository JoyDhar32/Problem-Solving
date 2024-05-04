const longestConsecutive = (nums) => {
    const set = new Set(nums);
    let longest = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;

            while (set.has(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }

            longest = Math.max(longest, currentLength);
        }
    }

    return longest;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
console.log(longestConsecutive([1, 2, 0, 1])); // 3

// time complexity: O(n)
// space complexity: O(n)
// ✅ Hint: Use Set to remove duplicates from the array. Iterate through the set and check if the current number is the start of a sequence. If it is, iterate through the sequence and update the longest sequence length. Return the longest sequence length.