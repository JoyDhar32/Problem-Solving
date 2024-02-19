const argumentsLength = (...args) => 
{
    let len = args.length;
    return len;
}
;

console.log(argumentsLength(1, 2, 3, 4, 5)); // 5
console.log(argumentsLength(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 10
console.log(argumentsLength(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)); // 11
console.log(argumentsLength(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)); // 12

// Time complexity is O(1)
// Space complexity is O(1)
// ✅  using rest parameter to get the length of arguments passed