const maxOperations = (nums, k) => {
    let left = 0; // left pointer
    let right = nums.length - 1; // right pointer
    let pair = 0; // number of pairs
    nums.sort((a, b) => (a - b)); // sort the array
    while (left < right) {  // iterate through the array
        let sum = nums[left] + nums[right]; // calculate the sum
        if (sum == k) { // if the sum is equal to k
            pair++; // increment the number of pairs
            left++; // move the left pointer
            right--;    // move the right pointer
        }
        else if (sum > k) { // if the sum is greater than k
            right--;    // move the right pointer
        }
        else {
            left++  // move the left pointer
        }
    }
    return pair;    // return the number of pairs 
}

// test cases
console.log(`Two pointer solution`);
console.log(maxOperations([1, 2, 3, 4], 5)); // 2
console.log(maxOperations([3, 1, 3, 4, 3], 6)); // 1
console.log(maxOperations([3, 1, 3, 4, 3], 7)); // 0

// Time complexity: O(nlogn)
// Space complexity: O(1)
// ✅ Hint: Use two pointers to find the maximum number of k-sum pairs in an array