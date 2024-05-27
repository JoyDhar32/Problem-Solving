const sumOfMultiples=(n)=>{
    let result=0;
    for(let i=1;i<=n;i++){
        if(i%3==0 || i%5==0 || i%7==0){
            result+=i;
        }
    }
    return result;
}

console.log(sumOfMultiples(10)); // 40
console.log(sumOfMultiples(20)); // 119
console.log(sumOfMultiples(7)); // 21

// Time Complexity: O(n)
// Space Complexity: O(1) because we are not using any extra space
// ✅ Hints: using % operator