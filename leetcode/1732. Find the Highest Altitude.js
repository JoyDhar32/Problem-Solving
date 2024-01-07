const largestAltitude = (gain) => {
    let max=0;
    let current=0;
    for(let i=0;i<gain.length;i++){
        current+=gain[i];
        max=Math.max(max,current);
    }
    return max;
}
console.log(largestAltitude([-5,1,5,0,-7])); // Output: 1
console.log(largestAltitude([-4,-3,-2,-1,4,3,2])); // Output: 0
// Time Complexity: O(n)
// Space Complexity: O(1)

// ✅Beats 80.54%of users with JavaScript