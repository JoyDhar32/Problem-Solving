const removeDuplicates = (nums) => {
    if(nums.length===0) return 0;
    let count =1;
    for(let i=1;i<nums.length;i++){
        if(nums[count-1]!==nums[i]){
            nums[count]=nums[i];
            count++;
        }
    }
    return count;
}
console.log(removeDuplicates([1,1,2])); // 2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // 5
console.log(removeDuplicates([])); // 0
console.log(removeDuplicates([1])); // 1

// time complexity: O(n)
// space complexity: O(1)
// ✅