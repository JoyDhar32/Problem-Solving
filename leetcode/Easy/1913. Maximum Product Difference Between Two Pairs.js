const maxProductDifference = (nums) => {
    nums.sort((a,b)=> a-b);
    const length=nums.length;
    const maxProduct=nums[length-1]*nums[length-2];
    const minProduct=nums[0]*nums[1];
    return maxProduct-minProduct;
}

console.log(maxProductDifference([5,6,2,7,4])); // 34
console.log(maxProductDifference([4,2,5,9,7,4,8])); // 64
// time complexity: O(nlogn)
// space complexity: O(1)

// ✅ Beats 100% of users with JavaScript