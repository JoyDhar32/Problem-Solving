const divideArray = (nums)=>{
    let sorted = nums.sort((a, b)=>a-b);
    for(let i=0; i<sorted.length; i++){
        if(sorted[i]===sorted[i+1]){
            i++;
    }
    else{
        return false;
    }
}
return true;
}

console.log(divideArray([1, 2, 3, 1])); // false
console.log(divideArray([1, 2, 3, 4])); // false
console.log(divideArray([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // false
console.log(divideArray([1, 1, 2, 2])); // true

// time complexity: O(n)
// space complexity: O(1)
// ✅ Hints: sort the array and compare the adjacent elements
