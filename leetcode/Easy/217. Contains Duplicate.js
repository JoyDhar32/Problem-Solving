const containsDuplicate=(nums)=>{
    let set = new Set(nums);
    let beforeLen=nums.length;
    let afterLen=set.size;
    return (beforeLen !=afterLen);
};
console.log(containsDuplicate([1,2,3,1])); // true
console.log(containsDuplicate([1,2,3,4])); // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // true

// time complexity: O(n)
// space complexity: O(n)
// ✅ Hints: use Set to store unique values and compare the length of the array and the size of the set