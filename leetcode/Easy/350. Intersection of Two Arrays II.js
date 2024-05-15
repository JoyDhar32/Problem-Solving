const intersect = (nums1, nums2) => {
    let result = [];
    let max=Math.max(nums1.length,nums2.length);
    for(let i=0;i<max;i++){
        if(nums1.includes(nums2[i])){
            result.push(nums2[i]);
            nums1.splice(nums1.indexOf(nums2[i]),1);
        }
    }
    return result;
}

console.log(intersect([1,2,2,1],[2,2]));//[2,2]
console.log(intersect([4,9,5],[9,4,9,8,4]));//[4,9]
console.log(intersect([1,2,3],[4,5,6]));//[]

// Time Complexity: O(n)
// Space Complexity: O(1) because we are not using any extra space to store the result
//✅ Hints: use the includes method to check if the element is present in the array