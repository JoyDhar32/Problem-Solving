/*
const sortArrayByParity2 =(nums)=>{
    let even = [];
    let odd = [];
for(let i=0;i<nums.length;i++){
    if(nums[i]%2==0){
        even.push(nums[i]);
    }
    else{
        odd.push(nums[i]);
}
}
return even.concat(odd);
}
*/
const sortArrayByParity =(nums)=>{
    let even = [];
    let odd = [];
nums.forEach((num)=>{
    if(num%2==0){
        even.push(num);
    }
    else{
        odd.push(num);
}
})
return even.concat(odd);
}

console.log(sortArrayByParity([3,1,2,4])); // [2,4,3,1]
console.log(sortArrayByParity([0])); // [0]
console.log(sortArrayByParity([1])); // [1]
console.log(sortArrayByParity([1,3]));  // [1,3]

// time complexity: O(n)
// space complexity: O(n)

// Hint: Two Pass Solution
// ✅ Hint: declare two array and store even and odd numbers in it