const findMinDifference = (timePoints) =>{
    let time = timePoints.map(time => {
        let [hour, minute] = time.split(':');
        return parseInt(hour) * 60 + parseInt(minute);
    });
    time.sort((a, b) => a - b);
    let min = Infinity;
    for (let i = 1; i < time.length; i++) {
        min = Math.min(min, time[i] - time[i - 1]);
    }
    min = Math.min(min, 24 * 60 + time[0] - time[time.length - 1]);
    return min;
}

console.log(findMinDifference(["23:59","00:00","00:00"])); // 0
console.log(findMinDifference(["23:59","00:00"])); // 1
console.log(findMinDifference(["12:12","00:13"])); // 719
console.log(findMinDifference(["12:12","12:13"])); // 1

// Time Complexity: O(nlogn)
// Space Complexity: O(n)
// ✅ Hintgs: using sort and loop to find the minimum difference between two time points.