const moveSZeros = (nums) => {
    let increment=0;
    let len=nums.length;
 for(let num of nums){
     if(num!==0){
         nums[increment]=num;
         increment++;
     }
 }
 while(len>increment)
 {
     nums[increment]=0;
     increment++;
 }
 return nums;

}

console.log(moveSZeros([0,1,0,3,12])) // [1,3,12,0,0]
console.log(moveSZeros([0])) // [0]
console.log(moveSZeros([1])) // [1]
console.log(moveSZeros([1,0])) // [1,0]

// Time Complexity: O(n)
// Space Complexity: O(1)
// ✅ Hints: Two Pointers