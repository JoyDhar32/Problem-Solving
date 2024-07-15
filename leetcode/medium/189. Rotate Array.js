
var rotate = function(nums, k) {
    let left=0;
    let right = nums.length-1;      // 7-1=6 
    nums=rotateArray(nums,left,right);  // [7,6,5,4,3,2,1] // reverse the whole array

    k=k%(nums.length);  // 3%7=3  // 3%6=3
    right=k-1; // 3-1=2
    nums=rotateArray(nums,left,right); // [5,6,7,4,3,2,1] // reverse the first k elements of the array

    left = k; // 3
    right=nums.length-1;    // 7-1=6
    nums=rotateArray(nums,left,right);  // [5,6,7,1,2,3,4] // reverse the rest of the array after k elements are reversed

};

const rotateArray=(nums,left,right)=>{ // [1,2,3 4,5,6,7]  0 6
    while(left<right){  // 0<6  
        let temp=nums[right]; // 7
        nums[right]=nums[left]; // 1
        nums[left]=temp;    // 7
        left++;
        right--
    }
    return nums;
}

console.log(rotate([1,2,3,4,5,6,7],3))//[5,6,7,1,2,3,4]
console.log(rotate([-1,-100,3,99],2))//[3,99,-1,-100]
console.log(rotate([1,2,3,4,5,6],2))//[5,6,1,2,3,4]

// Time Complexity: O(n). n elements are reversed a total of three times.
// Space Complexity: O(1). No extra space is used.
// ✅ Hints: Using Two Pointer