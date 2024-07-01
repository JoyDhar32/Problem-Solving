const threeConsecutiveOdds = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
        count++;
        if (count === 3) return true;
        } else {
        count = 0;
        }
    }
    return false;
    }

    console.log(threeConsecutiveOdds([2,6,4,1])); // false
    console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12])); // true
    console.log(threeConsecutiveOdds([1,2,1,1])); // false

    // Time Complexity: O(N)
    // Space Complexity: O(1)
    //  ✅ Hints: Use a counter to keep track of the number of consecutive odd numbers. If the counter reaches 3, return true. If an even number is encountered, reset the counter to 0.


// Approach 2: 

var threeConsecutiveOdds1 = function(arr) {
    let limit = arr.length-2;
    for(let i=0; i<limit; i++){
        if(arr[i]%2!=0 && arr[i+1]%2!=0 && arr[i+2]%2!=0) 
        {return true;}
    }
    return false;
};

console.log(threeConsecutiveOdds1([2,6,4,1])); // false
console.log(threeConsecutiveOdds1([1,2,34,3,4,5,7,23,12])); // true
console.log(threeConsecutiveOdds1([1,2,1,1])); // false

// Time Complexity: O(N)
// Space Complexity: O(1)
//  ✅ Hints: Iterate through the array and check if the current element and the next two elements are odd. If they are, return true. If the loop completes without finding three consecutive odd numbers, return false.