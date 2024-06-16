const sortBy =(arr, fn)=>{
    let result = arr.sort((a,b)=>fn(a)-fn(b));
    return result;
}

console.log(sortBy([1,2,3,4,5,6,7,8,9], (a)=>a%2)); // [2, 4, 6, 8, 1, 3, 5, 7, 9]
console.log(sortBy([1,2,3,4,5,6,7,8,9], (a)=>a)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// time complexity: O(n log n)
// space complexity: O(n)
// ✅ Hints: use the sort() method to sort the array based on the result of the function fn
