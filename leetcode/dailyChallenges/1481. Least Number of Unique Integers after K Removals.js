const findLeastNumOfUniqueInts = (arr, k) => {
    const map = new Map();
    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    const sorted = Array.from(map.values()).sort((a, b) => a - b);
    let i = 0;
    while (k > 0) {
        k -= sorted[i++];
    }
    return k === 0 ? sorted.length - i : sorted.length - i + 1;
    };
console.log(findLeastNumOfUniqueInts([5,5,5], 2));//1
console.log(findLeastNumOfUniqueInts([4,3,1,1,3,3,2], 3));//2
console.log(findLeastNumOfUniqueInts([1], 1));//0

// time complexity: O(nlogn)
// space complexity: O(n)
// ✅ Hints: using the map method and the sort method