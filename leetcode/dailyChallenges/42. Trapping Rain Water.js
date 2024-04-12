const trap = (height) => {
    let leftMax = 0;
    let rightMax = 0;
    let left = 0;
    let right = height.length - 1;
    let result = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                result += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                result += rightMax - height[right];
            }
            right--;
        }
    }
    return result;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));//6
console.log(trap([4, 2, 0, 3, 2, 5]));//9
console.log(trap([4, 2, 3]));//1
console.log(trap([2, 0, 2]));//2

// time complexity: O(n)
// space complexity: O(1)
// ✅ Hints : use two pointers to find the max