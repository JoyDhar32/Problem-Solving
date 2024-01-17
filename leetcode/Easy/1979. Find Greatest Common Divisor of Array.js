const findGCD = (nums) => {
let sortInput = nums.sort((a,b)=>a-b);
let minInput = sortInput[0];
let maxInput = sortInput[sortInput.length-1];
let result =1;
for(let i=1;i<=minInput;i++){
    if(minInput%i===0 && maxInput%i===0){
        result = i;
    }
}
return result;

}

/*
*** Optimized Code ***


*/

console.log(findGCD([2,5,6,9,10])); // 2
console.log(findGCD([7,5,6,8,3])); // 1
console.log(findGCD([3,3])); // 3
console.log(findGCD([2,3,4,5])); // 1


// ✅ Beats 37.37% of users with JavaScript