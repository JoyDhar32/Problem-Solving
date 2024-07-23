const frequencySort = (nums) => {
    let map = new Map(); // Create a map to store the frequency of each number in the array 
    for (let num of nums) { // Iterate through the array and update the frequency of each number in the map 
        map.set(num, map.get(num) + 1 || 1); // If the number is not in the map, set the frequency to 1 
    }
    return nums.sort((a, b) => map.get(a) - map.get(b) || b - a); // Sort the array based on the frequency of each number. If two numbers have the same frequency, sort them in descending order 
}

console.log(frequencySort([1, 1, 2, 2, 2, 3])); // [3,1,1,2,2,2]
console.log(frequencySort([2, 3, 1, 3, 2])); // [1,3,3,2,2]
console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1])); // [5,-1,4,4,-6,-6,1,1,1]

// time complexity: O(nlogn) - sorting the array 
// space complexity: O(n)
// ✅ Hints: Sorting, Hash Map