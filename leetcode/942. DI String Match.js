const diStringMatch = (s) => {
    let low = 0;
    let high = s.length;
    const res = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "I") {
        res.push(low++);
        } else {
        res.push(high--);
        }
    }
    res.push(low);
    return res;
    };

console.log(diStringMatch("IDID")); // [0,4,1,3,2]
console.log(diStringMatch("III")); // [0,1,2,3]

//  ✅ Beats 98.07% of users with JavaScript