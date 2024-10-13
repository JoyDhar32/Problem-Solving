const maximumProduct = (nums)=>{
    nums.sort((a,b)=>(b-a)); // Sort in descending order
    console.log(nums);
    len=nums.length;
    let positiveBiggest=nums[0]*nums[1]*nums[2];
    let negativeBiggest=nums[0]*nums[len-1]*nums[len-2];
    let output=Math.max(positiveBiggest,negativeBiggest);
    return output;
}

console.log(maximumProduct([1,2,3,4]))
console.log(maximumProduct([-1,-2,-3,-4]))
console.log(maximumProduct([-1,-2,-3,4]))

// Time Complexity: O(nlogn)
// Space Complexity: O(1)
// ✅ Hints:2 biggest neg * 1 biggest positive | Beat 99.87% of Leetcode submissions