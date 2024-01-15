const shuffle =(num,n)=>{
    let result=[];
    for(let i=0;i<n;i++){
        result.push(num[i],num[i+n]);
    }
    return result;
}
console.log(shuffle([2,5,1,3,4,7],3));
console.log(shuffle([1,2,3,4,4,3,2,1],4));
console.log(shuffle([1,1,2,2],2));
// Time Complexity: O(n)

// Space Complexity: O(1)
// ✅ Beat 91.55% of Leetcode submissions