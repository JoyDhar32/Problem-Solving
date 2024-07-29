const numTeams = (rating) => {
    let count = 0;
    for (let i = 0; i < rating.length; i++) {
        for (let j = i + 1; j < rating.length; j++) {
            for (let k = j + 1; k < rating.length; k++) {
                if (
                    (rating[i] < rating[j] && rating[j] < rating[k]) ||
                    (rating[i] > rating[j] && rating[j] > rating[k])
                ) {
                    count++;
                }
            }
        }
    }
    return count;
}

// Test case:

console.log(numTeams([2, 5, 3, 4, 1])); // 3
console.log(numTeams([2, 1, 3])); // 0
console.log(numTeams([1, 2, 3, 4])); // 4

// Time Complexity: O(n^3)
// Space Complexity: O(1)
// ✅ Hints: Brute Force Approach