const filter = (arr, fn) => {
    let length = arr.length;
    let filteredArray = [];
    let i = 0;
    while (i < length) {
        if (fn(arr[i], i)) {
            filteredArray.push(arr[i]);
        }
        i++;
    }
    return filteredArray;
}

// Test cases
console.log(filter([1, 2, 3], (x) => x > 1));//[2,3]
console.log(filter([1, 2, 3], (x) => x < 2));//[1]
console.log(filter([1, 2, 3], (x) => x % 2 === 0));//[2]
console.log(filter([1, 2, 3], (x) => x % 2 !== 0));//[1,3]

// Time complexity: O(n)
// Space complexity: O(n)
// ✅ Hint: Loop through the array and apply the function to each element