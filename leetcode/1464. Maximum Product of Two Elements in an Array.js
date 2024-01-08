const maxProduct =(nums)=>{
    let max = 0;
    let secondMax = 0;
    
    for (const num of nums) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax) {
            secondMax = num;
        }
    }
    
    return (max - 1) * (secondMax - 1);
}

console.log(maxProduct([3, 4, 5, 2]));
console.log(maxProduct([1, 5, 4, 5]));
console.log(maxProduct([3, 7]));
console.log(maxProduct([10, 2, 5, 2]));
console.log(maxProduct([1, 1, 1, 1]));
console.log(maxProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(maxProduct([7, 5, 6, 4, 2, 1]));

//time complexity: O(n)
//space complexity: O(1)

//✅Beats 100%of users with JavaScript