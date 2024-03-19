const leastInterval = (tasks, n) => {
    const map = {};
    for (let task of tasks) {
        map[task] = map[task] + 1 || 1;
    }
    const sorted = Object.values(map).sort((a, b) => b - a);
    let maxVal = sorted[0] - 1;
    let idleSlots = maxVal * n;
    for (let i = 1; i < sorted.length; i++) {
        idleSlots -= Math.min(maxVal, sorted[i]);
    }
    return idleSlots > 0 ? idleSlots + tasks.length : tasks.length;
    };
    // Time Complexity: O(nlogn)
    // Space Complexity: O(n)
    // ✅ Hints : Use an object to store the frequency of each character. Then, iterate through the string and return the index of the first character with a frequency of 1. If no such character is found, return -1.