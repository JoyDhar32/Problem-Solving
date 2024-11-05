const rotateString =(s, goal) => {
  if(s.length !== goal.length) return false;
  return (s + s).includes(goal); //if the goal is a substring of the doubled string, then it is a rotated string of the original string
};

console.log(rotateString('abcde', 'cdeab')); //true
console.log(rotateString('abcde', 'abced')); //false
console.log(rotateString('abcde', 'abcde')); //true

// Time Complexity: O(n) where n is the length of the input string
// Space Complexity: O(n) because we are using a constant amount of space
//✅ Hints: If we double the original string, then the rotated string will always be a substring of the doubled string.