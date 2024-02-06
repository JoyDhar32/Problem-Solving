const divideArray = (nums, k) => {
 const length = nums.length;
    const result = [];
    nums.sort((a, b) => a - b);
    let index=0;
    for(let i=0; i<length;i=i+3){
        if(i+2<length && nums[i+2]-nums[i]<=k){
            result[index] = [nums[i], nums[i+1], nums[i+2]];
            index++;
    
        }else 
        {return []}
    }
    return result;
    };
    console.log(divideArray([1,2,3,4,5,6,7,8,9,10], 3)); // [[1,2,3,4],[5,6,7],[8,9,10]]

// Time Complexity: O(nlogn)
// Space Complexity: O(n)
// ✅ Hint: Sort the array and then divide it into arrays with max difference k