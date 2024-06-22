const minDays = (bloomDay, m, k) => {
    if (m * k > bloomDay.length) return -1;
    let left = 1;
    let right = Math.max(...bloomDay);
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        let bouquets = 0;
        let flowers = 0;
        for (let i = 0; i < bloomDay.length; i++) {
            if (bloomDay[i] <= mid) {
                flowers++;
                if (flowers === k) {
                    bouquets++;
                    flowers = 0;
                }
            } else {
                flowers = 0;
            }
        }
        if (bouquets < m) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
};

console.log(minDays([1, 10, 3, 10, 2], 3, 1)); // 3
console.log(minDays([1, 10, 3, 10, 2], 3, 2)); // -1
console.log(minDays([7, 7, 7, 7, 12, 7, 7], 2, 3)); // 12

// Time complexity: O(n log n)
// Space complexity: O(1)
// ✅ Hints: use binary search to find the minimum number of days