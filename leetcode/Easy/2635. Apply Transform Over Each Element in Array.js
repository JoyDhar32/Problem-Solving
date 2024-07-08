const map = (arr, fn)=>{
    let length =arr.length;
    let transformedArray =[];
    let i=0;
    while(i<length){
        transformedArray.push(fn(arr[i]));
        i++;
    }
    return transformedArray;
}

// Test cases
console.log(map([1,2,3],(x)=>x*2));//[2,4,6]
console.log(map([1,2,3],(x)=>x+1));//[2,3,4]
console.log(map([1,2,3],(x)=>x-1));//[0,1,2]
console.log(map([1,2,3],(x)=>x/2));//[0.5,1,1.5]

// Time complexity: O(n)
// Space complexity: O(n)
// ✅ Hint: Loop through the array and apply the function to each element