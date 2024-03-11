const customSortString = (order, s) => {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }
    let result = '';
    for (let i = 0; i < order.length; i++) {
        if (map.has(order[i])) {
        result += order[i].repeat(map.get(order[i]));
        map.delete(order[i]);
        }
    }
    for (let [key, value] of map) {
        result += key.repeat(value);
    }
    return result;
    };

    console.log(customSortString('cba', 'abcd')); // cbad
    console.log(customSortString('cba', 'abcdabc')); // cbadabc
    console.log(customSortString('cba', 'abcdabc')); // cbadabc
    console.log(customSortString('cba', 'abcdabc')); // cbadabc

    // Time Complexity: O(n)
    // Space Complexity: O(n)
    // ✅ Using Map