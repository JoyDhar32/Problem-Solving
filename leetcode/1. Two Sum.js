const sum =(nums, target) =>{
for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]+nums[j]===target){
            return [i,j];
        }
    }
}
return [];
    
}

console.log(sum([2,7,11,15],9));
console.log(sum([3,2,4],6));
console.log(sum([3,3],6));
console.log(sum([3,2,3],6));

// time complexity: O(n^2)
// space complexity: O(1)

// ✅ Beats 95% of JavaScript submissions in runtime