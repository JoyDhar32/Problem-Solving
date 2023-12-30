function minimumTotal(triangle) {
    const n = triangle.length;

    // Start from the second-to-last row and update the minimum sum for each element
    for (let i = n - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
        }
    }

    // The minimum path sum is stored in the first element of the first row
    return triangle[0][0];
}

// Example usage:
const triangle1 = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
console.log(minimumTotal(triangle1)); // Output: 11

const triangle2 = [[-10]];
console.log(minimumTotal(triangle2)); // Output: -10
