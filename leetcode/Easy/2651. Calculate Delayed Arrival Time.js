const findDelayedArrivalTime =(arrivalTime, delayedTime) =>{
    return (arrivalTime + delayedTime) % 24;
}

console.log(findDelayedArrivalTime(10, 3));
console.log(findDelayedArrivalTime(23, 5));
console.log(findDelayedArrivalTime(0, 1));
console.log(findDelayedArrivalTime(12, 12));

// ✅ Hint: Use % operator to find the delayed arrival time.