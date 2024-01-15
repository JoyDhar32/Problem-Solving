const sumCounts =(nums)=>{
    const n = nums.length;
    let result = 0;

    for (let i = 0; i < n; i++) {
        const distinctValues = new Set();
        for (let j = i; j < n; j++) {
            distinctValues.add(nums[j]);
            result += distinctValues.size ** 2;
        }
    }

    return result;
}

console.log(sumCounts([1, 2, 3]));
console.log(sumCounts([1, 2, 3, 4]));
console.log(sumCounts([1, 2, 3, 4, 5]));

//time complexity: O(n^2)
//space complexity: O(n)

//✅Beats 84.19%of users with JavaScript

