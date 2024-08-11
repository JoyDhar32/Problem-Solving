const canCompleteCircuit=(gas,cost)=>{
    let total=0
    let start=0
    let tank=0
    for(let i=0;i<gas.length;i++){
        total+=gas[i]-cost[i]
        tank+=gas[i]-cost[i]
        if(tank<0){
            start=i+1
            tank=0
        }
    }
    return total>=0?start:-1
}

// Test Cases
console.log(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2])) //3
console.log(canCompleteCircuit([2,3,4],[3,4,3])) //-1
console.log(canCompleteCircuit([5,1,2,3,4],[4,4,1,5,1])) //4
console.log(canCompleteCircuit([5,8,2,8],[6,5,6,6])) //3

// Time Complexity: O(n)
// Space Complexity: O(1)
// ✅ Hint: Two pointers approach

/* Explanation: 
- We need to find the starting gas station index to complete the circuit. 
- We can use the two pointers approach to solve this problem.
- We will iterate through the gas array and calculate the total gas and tank gas.
- If the tank gas is less than 0, we will update the starting index and reset the tank gas.
- If the total gas is greater than or equal to 0, we will return the starting index.
- Otherwise, we will return -1.
*/