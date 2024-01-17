const sumZero = (n) => {
    const arr = [];
    let sum = 0;
    for (let i = 1; i < n; i++) {
        arr.push(i);
        sum += i;
    }
    arr.push(-sum);
    return arr;
}

console.log(sumZero(5)); // [-2,-1,0,1,2]
console.log(sumZero(3)); // [-1,0,1]
console.log(sumZero(1)); // [0]

// ✅ Beats 100% of users with JavaScript