var createCounter = function(n) {

    return function() {
      return n++;
    };
};
const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12

// time complexity: O(1)
// space complexity: O(1)
// ✅ Hint: Closure