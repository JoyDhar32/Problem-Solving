const rearrangeArray = (nums) => {
    let pos = [], neg = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) pos.push(nums[i]);
        else neg.push(nums[i]);
    }
    let res = [];
    for (let i = 0; i < pos.length; i++) {
        res.push(pos[i], neg[i]);
    }
    return res;
}
console.log(rearrangeArray([1, 2, 3, -1, -2, -3]));
console.log(rearrangeArray([1, 2, 3, 4, 5, 6]));

// time complexity is O(n)
// space complexity is O(n) 
// ✅ Hints: using if condition only