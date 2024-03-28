const maxSubarryLength = (nums, k) => {
    let left = 0;
    let maxLen = 0;
    let exceedCount = 0;
    const frequencyMap = new Map();

    for (let right = 0; right < nums.length; right++) {
        const currentNum = nums[right];
        frequencyMap.set(currentNum, (frequencyMap.get(currentNum) || 0) + 1);

        if (frequencyMap.get(currentNum) === k + 1) {
            exceedCount++;
        }

        while (exceedCount > 0) {
            const leftNum = nums[left];
            frequencyMap.set(leftNum, frequencyMap.get(leftNum) - 1);
            if (frequencyMap.get(leftNum) === k) {
                exceedCount--;
            }
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

console.log(maxSubarryLength([1, 2, 1, 2, 3], 2)); // 4
console.log(maxSubarryLength([1, 2, 1, 3, 4], 3)); // 3
console.log(maxSubarryLength([1, 2, 1, 3, 4], 4)); // 5
console.log(maxSubarryLength([1,2,3,1,2,3,1,2], 2)); // 5

// time complexity: O(n)
// space complexity: O(n)
// ✅ Hints: Sliding Window Technique