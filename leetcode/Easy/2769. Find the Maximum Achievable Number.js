const theMaximumAchievableX = (num, t) => { return (num + (t * 2)); };
console.log(theMaximumAchievableX(3, 2));//7
console.log(theMaximumAchievableX(4, 1));//6
console.log(theMaximumAchievableX(3, 4));//11
console.log(theMaximumAchievableX(4, 5));//14
console.log(theMaximumAchievableX(5, 6));//17

// time complexity is O(1)
// space complexity is O(1)
// ✅ Hints: multiply by 2 and add the result to the first number