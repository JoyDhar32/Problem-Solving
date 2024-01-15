const maximizeSum=(nums,k) =>{
     const maxNum = Math.max(...nums);
    return k * maxNum + k * (k - 1) / 2;
}

console.log(maximizeSum([1,2,3,4,5],3));
console.log(maximizeSum([1,2,3,4,5],2));
console.log(maximizeSum([1,2,3,77,5],1));

// time complexity: O(n)
// space complexity: O(1)

// ✅ Beats 100% of JavaScript submissions in runtime