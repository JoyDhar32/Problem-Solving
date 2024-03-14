const numSubarraysWithSum = (nums, goal) => {
    let count = 0;
    let sum = 0;
    let map = new Map();
    map.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - goal)) {
        count += map.get(sum - goal);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
    };

console.log(numSubarraysWithSum([1,0,1,0,1], 2)); // 4
console.log(numSubarraysWithSum([0,0,0,0,0], 0)); // 15
console.log(numSubarraysWithSum([0,0,0,0,0], 1)); // 0

// Time Complexity: O(n)
// Space Complexity: O(n)
// ✅ Hint: Using Map