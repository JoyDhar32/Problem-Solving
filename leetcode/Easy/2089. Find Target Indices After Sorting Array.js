const targetIndices =(nums,target) =>{
    let sortArray=[...nums].sort((a,b)=>a-b);
    let result=[];
    for(i=0;i<nums.length;i++){
        if(sortArray[i]==target){
            result.push(i);
        }
    }
    return result;
}
console.log(targetIndices([5, 6, 6, 8, 8, 10], 6)); // Output: [1,2]
console.log(targetIndices([1,2,5,2,3], 3)); // Output: 3
console.log(targetIndices([1,2,5,2,3], 5)); // Output:4

// Time Complexity: O(nlogn)
// Space Complexity: O(n)

//  ✅ Hint: traverse the array and sort it