const minimum = (nums1, nums2) => {
    let min1 = nums1.sort((a, b) => a - b);
    let set1 = new Set(min1);
    let min2 = nums2.sort((a, b) => a - b);
let set2= new Set(min2);
    let result = -1;
    for (let i = 0; i < Math.max(min1.length,min2.length); i++) {
       if(set1.has(min2[i])){
           result= min2[i];
           break;
       }
    }
    return result;
}
console.log(minimum([1,2,3],[2,4]));//1
console.log(minimum([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));//-1

// time complexity: O(nlogn)
// space complexity: O(n)

// ✅Hints: Array, Set