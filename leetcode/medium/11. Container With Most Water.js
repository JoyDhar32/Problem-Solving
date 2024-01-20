const maxArea = (height) => {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        const area = Math.min(height[left], height[right]) * (right - left);
        max = Math.max(max, area);
    
        if (height[left] < height[right]) left++;
        else right--;
    }
    
    return max;
    };

    console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
    console.log(maxArea([1,1])); // 1
    console.log(maxArea([4,3,2,1,4])); // 16

    // time complexity: O(n)
    // space complexity: O(1)

    // ✅ Using two pointers, we can move the pointer pointing to the shorter line inwards.