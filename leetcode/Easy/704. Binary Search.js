const search = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let mid;
    
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
    
        if (nums[mid] === target) {
        return mid;
        } else if (nums[mid] > target) {
        right = mid - 1;
        } else {
        left = mid + 1;
        }
    }
    
    return -1;
    };

console.log(search([-1,0,3,5,9,12], 9)); // 4
console.log(search([-1,0,3,5,9,12], 2)); // -1
console.log(search([5], 5)); // 0
console.log(search([5], -5)); // -1

// ✅ Hints: using binary search to find the target in the sorted array | Runtime: 72 ms, faster than 97.14% of JavaScript online submissions for Binary Search.