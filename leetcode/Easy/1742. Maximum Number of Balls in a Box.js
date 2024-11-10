const countBalls = (lowLimit, highLimit) => {
  const box = new Array(46).fill(0);
  let max = 0;
  for (let i = lowLimit; i <= highLimit; i++) {
    let sum = 0;
    let num = i;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    box[sum]++;
    max = Math.max(max, box[sum]);
  }
  return max;
}

// Test cases
console.log(countBalls(1, 10)); // 2
console.log(countBalls(5, 15)); // 2
console.log(countBalls(19, 28)); // 2+

// Time Complexity: O(n * log(highLimit)) where n is the number of balls and highLimit is the highest number in the range
// Space Complexity: O(1) since we are using a constant amount of space

//✅ Hints: The key is to iterate through the range of balls and calculate the sum of the digits for each ball. Use an array to store the count of balls in each box and return the maximum count.