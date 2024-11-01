const makeFancyString = (s) => {
    let result = ''; //initialize an empty string to store the result
    let count = 1; //initialize a count variable to keep track of the number of consecutive characters
    let prev = s[0]; //initialize a variable to store the previous character in the string
    result += prev; //add the first character to the result string since it will always be part of the fancy string
    for (let i = 1; i < s.length; i++) { //iterate through the string starting from the second character
        if (s[i] === prev) { //if the current character is the same as the previous character, increment the count  variable
        count++; 
        } else { //if the current character is different from the previous character, reset the count variable to 1 
        count = 1; 
        }
        if (count < 3) { //if the count is less than 3, add the current character to the result string 
        result += s[i]; 
        }
        prev = s[i]; //update the previous character to the current character for the next iteration
    }
    return result;
    };

console.log(makeFancyString('leeetcode'));//leetcode
console.log(makeFancyString('aaabaaaa'));//aabaa
console.log(makeFancyString('aab'));//aab

// Time Complexity: O(n)
// Space Complexity: O(1) because we are using a constant amount of space to store the result, count, and prev variables
//✅ Hints: Keep track of the previous character and the count of consecutive characters. If the count is less than 3, add the character to the result string.