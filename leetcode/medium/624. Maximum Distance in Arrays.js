const maxDistance = (arrays) => {
    let res = 0;
    let min = arrays[0][0];
    let max = arrays[0][arrays[0].length - 1]; // max represents the maximum value of the first array in arrays array
    // return max;
    let arraysLen = arrays.length;
    // return arraysLen;
    for (let i = 1; i < arraysLen; i++) {
        res = Math.max(res, Math.abs(arrays[i][arrays[i].length - 1] - min), Math.abs(max - arrays[i][0]));
        min = Math.min(min, arrays[i][0]);
        max = Math.max(max, arrays[i][arrays[i].length - 1]);
    }
    return res;
}
// test cases
console.log(maxDistance([[1, 2, 3], [4, 5], [1, 2, 3]])); // 4
console.log(maxDistance([[1], [1, 2]])); // 1
console.log(maxDistance([[1], [2]])); // 1

// Time Complexity : O(n)
// Space Complexity : O(1)
// ✅ Hint: Greedy Algorithm 