const sumZero = (n) => {
    const arr = [];
    if(n%2!==0){
        arr.push(0);
    }
    for(let i=1;i<=Math.floor(n/2);i++){
        arr.push(i,-i);
    }
    return arr;
}

console.log(sumZero(5)); // [-2,-1,0,1,2]
console.log(sumZero(3)); // [-1,0,1]
console.log(sumZero(1)); // [0]

// ✅ Beats 100% of users with JavaScript