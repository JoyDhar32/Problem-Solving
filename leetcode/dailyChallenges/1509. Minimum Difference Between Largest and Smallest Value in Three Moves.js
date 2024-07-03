const minDifference = (nums) => {
    nums.sort((a, b) => (a - b));
    let length = nums.length;
    if(length<=4) return 0;
    let difference1=nums[length-1]-nums[3];
    let difference2=nums[length-2]-nums[2];
    let difference3=nums[length-3]-nums[1];
    let difference4=nums[length-4]-nums[0];
    let result= Math.min(difference1,difference2,difference3,difference4)
    return result;
}

console.log(minDifference([1, 2, 2, 1])) // 0
console.log(minDifference([4, 9, 5])) // 1
console.log(minDifference([1, 5, 0, 10, 14])) // 8

// time complexity: O(nlogn) /* due to sorting     * /
// space complexity: O(1)
// ✅ Hints: Sort the array and calculate the difference between the largest and smallest elements. There are four possible ways to remove three elements from the array to minimize the difference. Return the minimum difference.

/* Explanation: 
Sorting the array: [0, 1, 1, 4, 6, 6, 6]
Four scenarios to consider:
Change the three smallest values: nums[length-1] - nums[3] = 6 - 4 = 2
Change two smallest and the largest value: nums[length-2] - nums[2] = 6 - 1 = 5
Change the smallest and two largest values: nums[length-3] - nums[1] = 6 - 1 = 5
Change the three largest values: nums[length-4] - nums[0] = 6 - 0 = 6
From these, the minimum difference is 2.
*/