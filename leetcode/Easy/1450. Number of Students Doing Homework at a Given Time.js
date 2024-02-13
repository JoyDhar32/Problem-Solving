const busyStudent = (startTime, endTime, queryTime) => {
    let count = 0;
    for (let i = 0; i < startTime.length; i++) {
        if (startTime[i] <= queryTime && endTime[i] >= queryTime) count++;
    }
    return count;
    };
console.log(busyStudent([1, 2, 3], [3, 2, 7], 4));//1
console.log(busyStudent([4], [4], 4));//1
console.log(busyStudent([4], [4], 5));//0

// time complexity is O(n)
// space complexity is O(1) because we are not using any extra space to store the result
// ✅ Hints: using if condition only