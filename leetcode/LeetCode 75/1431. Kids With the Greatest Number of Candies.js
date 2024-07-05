const kindsWithCandies = (candies, extraCandies) => {
    let length = candies.length;
    let max = Math.max(...candies); // Find the maximum number of candies in the array
    let result = []; // Store the result
    for (let i = 0; i < length; i++) { // Iterate over the array
        if (candies[i] + extraCandies >= max) { // Check if the current number of candies plus the extra candies is greater than or equal to the maximum number of candies
            result.push(true); // Store the result in an array
        }
        else {
            result.push(false); // Store the result in an array
        }
    }
    return result; // Return the result

}

console.log(kindsWithCandies([2, 3, 5, 1, 3], 3)); // Output: [true,true,true,false,true]
console.log(kindsWithCandies([4, 2, 1, 1, 2], 1)); // Output: [true,false,false,false,false]

// Time Complexity: O(n)
// Space Complexity: O(n)
// ✅ Hints: Find the maximum number of candies in the array. Iterate over the array and check if the current number of candies plus the extra candies is greater than or equal to the maximum number of candies. Store the result in an array and return it.