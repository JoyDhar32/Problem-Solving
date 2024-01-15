const canBeIncreasing = (nums)=>{
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] >= nums[i+1]){
            count++;
            if(nums[i-1] >= nums[i+1]){
                nums[i+1] = nums[i];
            }
        }
    }
    return count <= 1;
}
console.log(canBeIncreasing([1,2,10,5,7])); // true
console.log(canBeIncreasing([2,3,1,2])); // false
console.log(canBeIncreasing([1,1,1])); // false
console.log(canBeIncreasing([1,2,3])); // true
console.log(canBeIncreasing([105,924,32,968])); // true

// time complexity: O(n)
// space complexity: O(1)

// ✅ Beats 88.22%of users with JavaScript