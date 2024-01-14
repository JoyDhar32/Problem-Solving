const countNegatives = (grid) => {
    let count = 0;
    for(let i of grid){
        for(let j of i){
            if(j<0){
                count++;
            }
        }
    }
    return count;
}
console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])); // Output: 8
console.log(countNegatives([[3,2],[1,0]])); // Output: 0
console.log(countNegatives([[1,-1],[-1,-1]])); // Output: 3
console.log(countNegatives([[-1]])); // Output: 1

// Time Complexity: O(n^2)
// Space Complexity: O(1)

//  ✅ Beats 96.95% of JavaScript Submissions
// Hint: Use Binary Search
// Hint: Used for of loop to traverse 2D array
