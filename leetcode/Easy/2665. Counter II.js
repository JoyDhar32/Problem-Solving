var createCounter = function(init) {
    let current=init;
     let increment =()=> {
         return ++current
     };
     let decrement =()=> {
         return --current
         }    
     let reset =()=>{
         current = init
         return current;
         };
     return {increment, reset, decrement}
 };
 
const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4

// time complexity: O(1)
// space complexity: O(1)
// ✅ Hint: Closure and return an object with functions
