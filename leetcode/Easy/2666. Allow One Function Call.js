const once =(fn)=>{
return function(...args){
    if(fn){
        let result = fn(...args);
        fn = null;
        return result;
    }
}


}

// Test cases
let fn = (a,b,c) => (a + b + c)
 let onceFn = once(fn)
 console.log(onceFn(1,2,3)); // 6

onceFn(1,2,3); // 6
 onceFn(2,3,6); // returns undefined without calling fn

// Time complexity: O(1)
// Space complexity: O(1)
// ✅ Hint: Use a closure to store the function and return a new function that can only be called once