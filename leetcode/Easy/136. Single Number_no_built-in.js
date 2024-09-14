const singleNumber =(nums)=>{
    let afterSort=nums.sort((a,b)=>(a-b));
    for(let i = 0; i < nums.length; i++){
        if(afterSort[i]==afterSort[i+1] || afterSort[i]==afterSort[i-1]) continue;
        else
        return afterSort[i];
    } 
}

console.log(singleNumber([1,2,2,3,4,1,3,5,7,8,9,9,8,7]))

// ✅Hints: Sort & Loop