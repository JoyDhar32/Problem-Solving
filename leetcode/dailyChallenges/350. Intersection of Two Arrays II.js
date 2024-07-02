const intersect = (nums1, nums2) => {
    const map = {};
    const result = [];
    for (const num of nums1) {
        map[num] = map[num] + 1 || 1;
    }
    for (const num of nums2) {
        if (map[num]) {
        result.push(num);
        map[num]--;
        }
    }
    return result;
    };

    console.log(intersect([1,2,2,1], [2,2])); // [2,2]
    console.log(intersect([4,9,5], [9,4,9,8,4])); // [4,9]
    console.log(intersect([1,2,2,1], [2])); // [2]

    // Time Complexity: O(N + M)
    // Space Complexity: O(N)
    //  ✅ Hints: Use a hash map to store the frequency of each element in the first array. Iterate through the second array and check if the element exists in the hash map. If it does, add it to the result array and decrement the frequency in the hash map. Return the result array.