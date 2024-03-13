const pivotInteger = (n) => {
    let totalSum=n*(n+1)/2;
    let leftSum=0;
    for(let i=1;i<=n;i++){
        leftSum+=i;
        if(totalSum-leftSum+i===leftSum){
            return i;
        }
    }
    return -1;
};

// time complexity: O(n)
// space complexity: O(1)
// ✅ Hints:  The sum of the first n positive integers is n(n+1)/2. If the pivot integer exists, the sum of the left part and the sum of the right part should be equal to the sum of the first n positive integers.
