const maxWidthOfVerticalArea = (points) => {
    points.sort((a, b) => a[0] - b[0]);
    let max = 0;
    for (let i = 1; i < points.length; i++) {
        max = Math.max(max, points[i][0] - points[i - 1][0]);
    }
    return max;
}

console.log(maxWidthOfVerticalArea([[8, 7], [9, 9], [7, 4], [9, 7]])); // 1
console.log(maxWidthOfVerticalArea([[3, 1], [9, 0], [1, 0], [1, 4], [5, 3], [8, 8]])); // 3
console.log(maxWidthOfVerticalArea([[8, 7], [9, 9], [7, 4], [9, 7]])); // 1

// Time Complexity: O(nlogn)
// Space Complexity: O(1)
// ✅ Hints : Sorting the Horizontal Coordinates and finding the maximum difference between them