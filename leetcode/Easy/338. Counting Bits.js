const countBits =(n) =>{
  let result= new Array(n+1).fill(0);
  for (let i=1;i<=n;i++){
result[i]=result[i>>1]+(i&1);
}
return result;
}
console.log(countBits(2)); // [0,1,1]
console.log(countBits(5)); // [0,1,1,2,1,2]


// time complexity: O(n)
// space complexity: O(n)
// ✅ Hints: convert to binary, then count the number of 1s