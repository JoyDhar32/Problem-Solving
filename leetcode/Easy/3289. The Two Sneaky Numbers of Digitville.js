const getSneakyNumbers = (nums) => {
    let set = new Set();
    let output = [];
    for (const n of nums) {
      if (set.has(n)) output.push(n);
      else set.add(n);
      if (output.length >= 2) break;
    }
    return output;
    
    };

console.log(getSneakyNumbers([3, 5, 15, 20, 9, 7, 10, 30]));//[15, 30]
console.log(getSneakyNumbers([3, 5, 15, 20, 9, 7, 10, 30, 45]));//[15, 30, 45]

// Time Complexity: O(n)
// Space Complexity: O(n) because we are using a set to store the numbers
//✅ Hints: Use a set to store the numbers you have seen so far. If you encounter a number that is already in the set, add it to the output array. Stop once you have found two numbers in the output array.