const numberGame = (nums) =>{
    nums.sort((a,b)=>a-b);
    for(let i=1;i<nums.length;i=i+2){
        let temp=nums[i];
        nums[i]=nums[i-1];
        nums[i-1]=temp;
    }
    return nums;
}
console.log(numberGame([1,2,3,4,5,6,7]));
console.log(numberGame([1,2,3,4,5,6]));
console.log(numberGame([1,2,3,4,5]));
console.log(numberGame([1,2,3,4]));
console.log(numberGame([1,2,3]));
console.log(numberGame([5,4,2,3]));

// Time Complexity: O(nlogn)
// Space Complexity: O(1)

// ✅ Beats 51.22%of users with JavaScript