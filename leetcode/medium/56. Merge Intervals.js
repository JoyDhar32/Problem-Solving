const merge = (intervals) => {
    const res = [];
    const sorted = intervals.sort((a, b) => a[0] - b[0]);

    for (const interval of sorted) {
        if (res.length === 0 || interval[0] > res[res.length - 1][1]) {
            res.push(interval);
        } else {
            res[res.length - 1][1] = Math.max(res[res.length - 1][1], interval[1]);
        }
    }

    return res;
}

// Test cases
console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])); // [[1, 6], [8, 10], [15, 18]]
console.log(merge([[1, 4], [4, 5]])); // [[1, 5]]
console.log(merge([[1, 4], [2, 3]])); // [[1, 4]]

// Time Complexity: O(n log n) due to sorting
// Space Complexity: O(n) for storing the sorted intervals and the result array

// ✅ Hints: Sort the intervals based on the start time. Iterate through the sorted intervals and merge overlapping intervals. If the start time of the current interval is greater than the end time of the last interval in the result array, add the current interval to the result array. Otherwise, update the end time of the last interval in the result array with the maximum of the two end times. Return the result array.