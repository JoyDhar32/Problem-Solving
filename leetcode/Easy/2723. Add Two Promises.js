const addTwoPromises = async (promise1, promise2) => {
    const [val1, val2] = await Promise.all([promise1, promise2]);
    return val1 + val2;
    };

console.log(addTwoPromises(Promise.resolve(3), Promise.resolve(5))); // 8
console.log(addTwoPromises(Promise.resolve(7), Promise.resolve(2))); // 9

// time complexity: O(1)
// space complexity: O(1)
// ✅ Hints: where n is the number of promises