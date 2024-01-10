const countGoodTriplets = (arr, a, b, c) => {
    let count = 0;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
                    count++;
                }
            }
        }
    }
    return count;
};

console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3))//4
console.log(countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1))//0
console.log(countGoodTriplets([7, 3, 7, 3, 12, 1, 12, 2, 3], 5, 8, 1))//12
console.log(countGoodTriplets([1, 2, 3, 4, 5], 3, 4, 5))//0
console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3))//4

// time complexity: O(n^3)
// space complexity: O(1)

//✅ Beats 84.00% of users with JavaScript submissions

/*
The given code is for solving a problem that involves finding the number of good triplets in an array based on certain conditions. Let's break down the problem statement and then go through the code:

### Problem Statement:

You are given an array of integers `arr`, and three integers `a`, `b`, and `c`. The task is to find the number of good triplets.

A triplet `(arr[i], arr[j], arr[k])` is considered good if the following conditions are true:

1. \(0 \leq i < j < k < \text{{arr.length}}\)
2. \(\lvert \text{{arr[i]}} - \text{{arr[j]}} \rvert \leq a\)
3. \(\lvert \text{{arr[j]}} - \text{{arr[k]}} \rvert \leq b\)
4. \(\lvert \text{{arr[i]}} - \text{{arr[k]}} \rvert \leq c\)

### Code Explanation:

The provided code defines a function `countGoodTriplets` that takes an array `arr` and three integers `a`, `b`, and `c`. It uses three nested loops to iterate over all possible triplets in the array and checks whether each triplet satisfies the given conditions.

Here's a step-by-step explanation:

1. Initialize a variable `count` to 0, which will be used to keep track of the number of good triplets.

2. Use three nested loops to iterate over all possible triplets (`i`, `j`, `k`).
   - \(i\) ranges from 0 to `arr.length - 3` (exclusive).
   - \(j\) ranges from \(i + 1\) to `arr.length - 2` (exclusive).
   - \(k\) ranges from \(j + 1\) to `arr.length - 1` (inclusive).

3. Inside the nested loops, check whether the current triplet satisfies the conditions using the `if` statement:
   - \(\lvert \text{{arr[i]}} - \text{{arr[j]}} \rvert \leq a\)
   - \(\lvert \text{{arr[j]}} - \text{{arr[k]}} \rvert \leq b\)
   - \(\lvert \text{{arr[i]}} - \text{{arr[k]}} \rvert \leq c\)
   
   If all conditions are met, increment the `count` variable.

4. After the loops, return the final count.

### Example:

Let's take the first example provided:

```javascript
console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3))//4
```

Here, the function will iterate over all possible triplets and count the ones that satisfy the conditions:

- Good triplet: (3, 0, 1)
- Good triplet: (3, 0, 1)
- Good triplet: (3, 1, 1)
- Good triplet: (0, 1, 1)

The total count is 4, and that is the expected output.

### Time and Space Complexity:

- Time Complexity: \(O(n^3)\) - This is because of the three nested loops, where \(n\) is the length of the input array `arr`.
- Space Complexity: \(O(1)\) - The algorithm uses a constant amount of space, as it doesn't rely on additional data structures that scale with the input size.

### Note:

The provided code is a straightforward solution to the problem, but it has a cubic time complexity, making it less efficient for large input arrays. There might be more optimized solutions that reduce the time complexity.

*/