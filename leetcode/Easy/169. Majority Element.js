
var majorityElement = function (nums) {
    let count = 0;
    let selectedNumber = null; 
    for (let num of nums) {
        if (count === 0) {
            selectedNumber = num;  // selected number
        }
        count += (selectedNumber === num) ? 1 : -1;  // increment or decrement count
    }
    count = 0;
    let len = nums.length;
    for (let num of nums) {
        if (selectedNumber === num) {
            count++;
        }
    }

    return count > Math.floor(len / 2) ? selectedNumber : null


};
console.log(majorityElement([3, 2, 3]))//3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))//2
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))//2

// ✅ Hints: Using Moore's Voting Algorithm