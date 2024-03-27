const numSubarrayProductLessTanK = (nums, k) => {
    if (k <= 1) return 0;
    let product = 1, count = 0, left = 0;
    for (let right = 0; right < nums.length; right++) {
        product *= nums[right];
        while (product >= k) {
            product /= nums[left++];
        }
        count += right - left + 1;
    }
    return count;
}   

console.log(numSubarrayProductLessTanK([10, 5, 2, 6], 100)); // 8
console.log(numSubarrayProductLessTanK([1, 2, 3], 0)); // 0
console.log(numSubarrayProductLessTanK([1, 1, 1], 1)); // 0

// time complexity: O(n)
// space complexity: O(1)
// ✅ Hints: Sliding Window Technique