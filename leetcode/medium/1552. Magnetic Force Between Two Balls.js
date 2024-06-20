const maxDistance = (position, m) => {
    position.sort((a, b) => a - b);
    let left = 1;
    let right = position[position.length - 1] - position[0];
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (isValid(position, m, mid)) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left - 1;
};

const isValid = (position, m, distance) => {
    let count = 1;
    let last = position[0];
    for (let i = 1; i < position.length; i++) {
        if (position[i] - last >= distance) {
            count++;
            last = position[i];
        }
    }
    return count >= m;
};

console.log(maxDistance([1, 2, 3, 4, 7], 3)); // 3
console.log(maxDistance([5, 4, 3, 2, 1, 1000000000], 2)); // 999999999
console.log(maxDistance([79, 74, 57, 22], 4)); // 5

// Time complexity: O(n log n)
// Space complexity: O(1)
// ✅ Hints: use binary search to find the maximum distance