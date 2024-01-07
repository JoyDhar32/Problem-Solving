function minTimeToVisitAllPoints(points) {
    let minTime = 0;

    for (let i = 1; i < points.length; i++) {
        const [x1, y1] = points[i];
        const [x0, y0] = points[i - 1];
        minTime += Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0));
    }

    return minTime;
}

// Example usage:
console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]])); // Output: 7
console.log(minTimeToVisitAllPoints([[3,2],[-2,2]])); // Output: 5

// Time Complexity: O(n)
// Space Complexity: O(1)

// ✅Beats 92.22%of users with JavaScript