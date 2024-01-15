const pivotInteger = (n)=>{
let totalSum=n*(n+1)/2;
let leftSum=0;
for(let i=1;i<=n;i++){
    leftSum+=i;
    if(totalSum-leftSum+i===leftSum){ // totalSum-leftSum+i is the rightSum
        return i;
    }
}
return -1;
}

console.log(pivotInteger(1)); // 1
console.log(pivotInteger(2)); // -1
console.log(pivotInteger(3)); // -1
console.log(pivotInteger(8)); // 6

// time complexity: O(n)
// space complexity: O(n)

// ✅ Hints: totalSum-leftSum+i is the rightSum

