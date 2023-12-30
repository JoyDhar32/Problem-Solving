const Merge=(nums1,m,nums2,n)=>{ 
    for(let i=m, j=0; j<n;j++,i++){ // i=3, j=0
        nums1[i]=nums2[j]; // [1,2,3,2,5,6]
    }
    let result=nums1.sort((a,b)=>a-b); // [1,2,2,3,5,6]
    return result; 
}


console.log(Merge(([1,2,3,0,0,0]),3,[2,5,6],3)); // [1,2,2,3,5,6]
console.log(Merge(([1]),1,[],0)); // [1]
console.log(Merge(([0]),0,[1],1)); // [1]
console.log(Merge(([2,0]),1,[1],1)); // [1,2]

// time complexity: O(n)
// space complexity: O(1)

// ✅
