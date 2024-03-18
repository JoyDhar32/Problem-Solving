const findMinArrowShots = function(points) {
    if (!points.length) return 0;
    points.sort((a, b) => a[1] - b[1]);
    let count = 1;
    let end = points[0][1];
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > end) {
        count++;
        end = points[i][1];
        }
    }
    return count;
    };

    console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]])); // 2
    console.log(findMinArrowShots([[1,2],[3,4],[5,6],[7,8]])); // 4
    console.log(findMinArrowShots([[1,2],[2,3],[3,4],[4,5]])); // 2

    // Time Complexity: O(n log n)
    // Space Complexity: O(1)
    // ✅ Hint: Sort the points by their end position.