const pivotIndex=(nums)=>{
    let totalSum=0;
    let leftSum=0;
    let len=nums.length;
    for(let num of nums)totalSum+=num;

    for(let i=0;i<len;i++){
        if(leftSum===(totalSum-leftSum-nums[i])) return i;
        leftSum+=nums[i];
    }
    return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6])) // 3
console.log(pivotIndex([1, 2, 3])) // -1
console.log(pivotIndex([2, 1, -1])) // 0

// Time complexity: O(n)
// Space complexity: O(1)
// ✅ Hints: Counting Left Sum and compare it to totalsum-leftsum-current Number. |Beats 94.61%
 