const passThePillow = (n, time) => {
let moveForward =1; // 1 means true
let output =1; // 1 is the starting position
while (time > 0) { // While the time is greater than 0
    time--; // Decrement the time by 1
  if(moveForward){ // If moveForward is true
    output++; // Increment the output by 1
  }
  else{ // Otherwise
    output--; // Decrement the output by 1
  }
  if(output==n){ // If the output is equal to n
    moveForward = 0; // Set moveForward to 0
  }
  else if(output==1){   // If the output is equal to 1
    moveForward = 1;    // Set moveForward to 1
  }
    
}
return output;  // Return the output
    
}

console.log (passThePillow(3, 5)); // Output: 1
console.log (passThePillow(5, 10)); // Output: 0
console.log (passThePillow(7, 12)); // Output: 2

// Time Complexity: O(n)
// Space Complexity: O(1)
// ✅ Hints: Use a while loop to iterate over the time. If moveForward is true, increment the output by 1; otherwise, decrement the output by 1. If the output is equal to n, set moveForward to 0; if the output is equal to 1, set moveForward to 1. Return the output.