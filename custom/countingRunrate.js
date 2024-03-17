/*
A match between KKR & CSK.
CSK scored 153  in 20 overs.
KKR scored 25 runs in 6 overs.
Calculate the current run rate of KKR.
Calculate the required run rate for KKR.
return the current run rate and required run rate in the below format.
Current Run Rate: 
Required Run Rate: 
*/

const calculateRunrate= (totalRuns, totalOvers, runsScored, oversPlayed) => {
    const currentRunRate = runsScored / oversPlayed; 

    const requiredRunRate = (totalRuns - runsScored) / (totalOvers - oversPlayed);
    return `Current Run Rate: ${currentRunRate.toFixed(2)} \nRequired Run Rate: ${requiredRunRate.toFixed(2)}`;
};

console.log(calculateRunrate(153, 20, 25, 6)); // Current Run Rate: 4.166666666666667 Required Run Rate: 9.5
console.log(calculateRunrate(153, 20, 50, 10)); // Current Run Rate: 5 Required Run Rate: 10.3

// time complexity: O(1)
// space complexity: O(1)
// Hints: using the formula for run rate, current run rate = runsScored / oversPlayed, required run rate = (totalRuns - runsScored) / (totalOvers - oversPlayed)



