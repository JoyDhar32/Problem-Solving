const bagOfTokensScore =(tokens, power) =>{
    tokens.sort((a,b)=>a-b);
    let score = 0;
    let maxScore = 0;
    let i = 0;
    let j = tokens.length-1;
    while(i<=j){
        if(power>=tokens[i]){
            power-=tokens[i];
            i++;
            score++;
            maxScore = Math.max(maxScore, score);
        }else if(score>0){
            power+=tokens[j];
            j--;
            score--;
        }else{
            break;
        }
    }
    return maxScore;
}
console.log(bagOfTokensScore([100,200,300,400], 200))//2. 100,200
console.log(bagOfTokensScore([100,200], 150))//1. 100

// time complexity is O(nlogn)
// space complexity is O(1)
// ✅ Hints : Maintain two pointers and update one with a delay of n steps.