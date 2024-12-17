const findRightInterval = (intervals) => {
    const n = intervals.length;
    const res = new Array(n).fill(-1);
    const sorted = intervals.map((interval, i) => [interval[0], i]).sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < n; i++) {
        let left = 0, right = n;
        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);
            if (sorted[mid][0] < intervals[i][1]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        if (left < n) res[i] = sorted[left][1];
    }

    return res;
};

// Test cases
console.log(findRightInterval([[1, 2]])); // [-1]
console.log(findRightInterval([[3, 4], [2, 3], [1, 2]])); // [-1, 0, 1]
console.log(findRightInterval([[1, 4], [2, 3], [3, 4]])); // [-1, 2, -1]

// Time Complexity: O(n log n) due to sorting and binary search
// Space Complexity: O(n) for storing the sorted intervals and the result array
//✅ Hints: Sort the intervals based on the start time. Use binary search to find the right interval for each interval. If the start time of the interval is greater than the end time of the current interval, update the result array with the index of the current interval. Return the result array.