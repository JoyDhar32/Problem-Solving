const timeRequiredToBuy = (tickets, k)=>{
let step=0;
    for(let i=0;tickets[k]>0;i++ ){
        let idx = i%tickets.length;
        if(tickets[idx]>0){
            tickets[idx]--;
            step++;
        }
    }

    return step;


}

console.log(timeRequiredToBuy([2,3,2],2))
console.log(timeRequiredToBuy([1,2,1],0))
console.log(timeRequiredToBuy([5,1,3],0))


// Time Complexity: O(n)
// Space Complexity: O(n)
// ✅ Hints: using normal approach