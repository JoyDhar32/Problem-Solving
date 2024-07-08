const reduce = (nums,fn,init)=>{
    let output = nums.reduce(fn,init);
    return output;
}

// Test cases
console.log(reduce([1,2,3],(acc,curr)=>acc+curr,0));//6
console.log(reduce([1,2,3],(acc,curr)=>acc*curr,1));//6
console.log(reduce([1,2,3],(acc,curr)=>acc-curr,0));//-6
console.log(reduce([1,2,3],(acc,curr)=>acc/curr,1));//0.16666666666666666

// Time complexity: O(n)
// Space complexity: O(1)
// ✅ Hint: Use the reduce method to apply the function to each element in the array