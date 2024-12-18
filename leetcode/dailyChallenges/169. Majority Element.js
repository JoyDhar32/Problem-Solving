const majorityElement = (nums) => {
    const map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
        if (map.get(num) > nums.length / 2) return num;
    }
    };
    console.log(majorityElement([3,2,3]))//3
    console.log(majorityElement([2,2,1,1,1,2,2]))//2
    console.log(majorityElement([2,2,1,1,1,2,2]))//2
    
// time complexity is O(n)
// space complexity is O(n)
// ✅ Hint: Boyer-Moore Voting Algorithm