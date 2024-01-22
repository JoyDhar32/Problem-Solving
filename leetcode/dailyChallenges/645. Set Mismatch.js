const findErrorNums = (nums) => {
    let set = new Set();
    let duplicateNum = 0;
    let absent=0;
    for(let i=0;i<nums.length;i++){
        if(set.has(nums[i])){
            duplicateNum=nums[i];
        }
        set.add(nums[i]);
    }
    for(let i=1;i<=nums.length;i++){
        if(!set.has(i)){
            absent=i;
        }
    }
    return [duplicateNum,absent];
}
console.log(findErrorNums([1,2,2,4])); // [2,3]
console.log(findErrorNums([1,1])); // [1,2]
console.log(findErrorNums([2,2])); // [2,1]
console.log(findErrorNums([3,2,2])); // [2,1]

// ✅ Time Complexity: O(n)
// ✅ Space Complexity: O(n)

// ✅ Hints :  Use Set to find duplicate and absent number