const findDisappearedNumbers =(nums) =>{
    let len=nums.length;
    let set=new Set(nums);
    let result=[];
    let check=1;
    for(let i=1;i<=len;i++){
        if(!set.has(check)){
result.push(check);
        }
        check++;
    }
    return result;
}

// Test Cases

console.log(findDisappearedNumbers(1,21,3,2,1,3,4,5)) //
console.log(findDisappearedNumbers(4,3,2,7,8,2,3,1)) //

//Time Complexity O(n)
//Space Complexity O(1)
//✅ Hints: Using Set
