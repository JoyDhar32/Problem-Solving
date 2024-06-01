const balancedStringSplit = (s)=>{
    let count = 0;
    let result = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'L'){
            count++;
        }else{
            count--;
        }
        if(count === 0){
            result++;
        }
    }
    return result;
}

console.log(balancedStringSplit("RLRRLLRLRL")); // 4
console.log(balancedStringSplit("RLLLLRRRLR")); // 3
console.log(balancedStringSplit("LLLLRRRR")); // 1

// Time Complexity: O(n)
// Space Complexity: O(1) because we are using only 2 variables count and result
// ✅ Hints: using count variable to store the difference between L and R