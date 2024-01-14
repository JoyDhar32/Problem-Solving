const hasTrailingZeros = (nums)=>{
    let count =0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]%2==0){
            count++;
    }
}
return count>=2;
}
console.log(hasTrailingZeros([3,5,7,9])); // false
console.log(hasTrailingZeros([3,5,7,8])); // false
console.log(hasTrailingZeros([1,2,3,4,5])); // true
console.log(hasTrailingZeros([2,4,8,16])); // true


//  ✅ Beats 98.07% of users with JavaScript

