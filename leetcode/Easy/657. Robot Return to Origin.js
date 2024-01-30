//https://leetcode.com/problems/robot-return-to-origin/solutions/4647972/beginner-friendly-easy-to-understand/

const judgeCircle = function (moves) {
    let leftRight=0, upDown=0;
    for(let i=0; i<moves.length;i++){
        if(moves[i]==='U') upDown++;
        if(moves[i]==='D') upDown--; 
        if(moves[i]==='L') leftRight++;
        if(moves[i]==='R') leftRight--;
    }
    return leftRight===0 && upDown===0;
}
console.log(judgeCircle("UD"));
console.log(judgeCircle("LL"));
console.log(judgeCircle("RRDD")); 

// Time Complexity: O(n)
// Space Complexity: O(1)
// ✅ Hints: Count left and right moves separately using two variables.