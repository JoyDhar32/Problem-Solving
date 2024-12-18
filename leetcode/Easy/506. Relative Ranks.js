const findRelativeRanks = (score) => {
    const sorted = [...score].sort((a, b) => b - a);  
    const map = new Map();
    for (let i = 0; i < sorted.length; i++) {
        if (i === 0) map.set(sorted[i], "Gold Medal");
        else if (i === 1) map.set(sorted[i], "Silver Medal");
        else if (i === 2) map.set(sorted[i], "Bronze Medal");
        else map.set(sorted[i], `${i + 1}`);
    }
    return score.map((s) => map.get(s));
    };

// Test cases
console.log(findRelativeRanks([5, 4, 3, 2, 1])); // ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
console.log(findRelativeRanks([10, 3, 8, 9, 4])); // ["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"]
console.log(findRelativeRanks([1])); // ["Gold Medal"]
console.log(findRelativeRanks([1, 2])); // ["Silver Medal", "Gold Medal"]

// Time Complexity: O(n log n) where n is the number of elements in the array score due to sorting
// Space Complexity: O(n) for storing the sorted array and the map
// ✅ Hints: Sort the input array in descending order. Create a map to store the ranks for each score. Assign the ranks based on the sorted order. Finally, map each score in the input array to its corresponding rank using the map.


/*
You are given an array of athletes' scores, and each score is unique. Your task is to rank the athletes:  

- The highest score gets "Gold Medal."  
- The second-highest gets "Silver Medal."  
- The third-highest gets "Bronze Medal."  
- From the fourth place onward, the rank is their placement number (e.g., "4", "5").  

Return an array where each athlete’s rank corresponds to their position in the input array.
*/

/*
Solution Explanation:

01. We first create a sorted array of the input scores in descending order. This will allow us to easily assign the ranks based on the sorted order.

02. We then create a map to store the ranks for each score. We iterate through the sorted array and assign the ranks as follows:

    - If the current index is 0, we assign the rank "Gold Medal" to the score.
    - If the current index is 1, we assign the rank "Silver Medal" to the score.
    - If the current index is 2, we assign the rank "Bronze Medal" to the score.
    - For all other indices, we assign the rank as the index plus 1.

03. Finally, we map each score in the input array to its corresponding rank using the map we created in step 2.

*/