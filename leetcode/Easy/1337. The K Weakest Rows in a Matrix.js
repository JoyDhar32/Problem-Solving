const kWeakestRows = (mat, k) => {
    const arr = [];
    for (let i = 0; i < mat.length; i++) {
        arr.push([i, mat[i].reduce((a, b) => a + b)]);
    }
    arr.sort((a, b) => a[1] - b[1]);
    return arr.slice(0, k).map((item) => item[0]);
    };

console.log(kWeakestRows([[1,1,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,1,0,0,0],
    [1,1,1,1,1]],3)) // [2,0,3]

    //✅ Beats 97.99% of JavaScript submissions in runtime