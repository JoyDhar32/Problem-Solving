const nthUglyNumber = (n) => {
    let res = [1];
    let i2 = 0, i3 = 0, i5 = 0;
    while (res.length < n) {
        let m2 = res[i2] * 2, m3 = res[i3] * 3, m5 = res[i5] * 5;
        let min = Math.min(m2, m3, m5);
        if (min === m2) i2++;
        if (min === m3) i3++;
        if (min === m5) i5++;
        res.push(min);
    }
    return res[n - 1];

}