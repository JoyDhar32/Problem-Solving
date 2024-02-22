const reangeBitwiseAnd = (left ,right) => {
    let shift = 0;
    while(left < right){
        left >>= 1;
        right >>= 1;
        shift++;
    }
    return left << shift;
}
console.log(reangeBitwiseAnd(5,7)); // 4
console.log(reangeBitwiseAnd(0,1)); // 0
console.log(reangeBitwiseAnd(1,2)); // 0

// Time complexity is O(n)
// Space complexity is O(1)
// ✅ Hints: using bitwise operation and shifting