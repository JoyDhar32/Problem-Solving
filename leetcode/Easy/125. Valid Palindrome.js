function isPalindrome(s) {
    // Remove non-alphanumeric characters and convert to lowercase
    const onlyString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return onlyString === onlyString.split('').reverse().join('');
  }
  
  // Test cases
  console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
  console.log(isPalindrome("race a car")); // Output: false
  console.log(isPalindrome(" ")); // Output: true

// time complexity: O(n)
// space complexity: O(1)

// ✅ Beats 81.99% of users with JavaScript
  /*Function isPalindrome: This function takes a string s as its parameter and returns true if the string is a palindrome (after removing non-alphanumeric characters and converting to lowercase), and false otherwise.

s.replace(/[^a-zA-Z0-9]/g, ''): This part uses the replace method with a regular expression to remove all non-alphanumeric characters ([^a-zA-Z0-9]) globally (/g) from the input string s. This includes characters like commas, spaces, and colons.

onlyString.split(''): This converts the cleaned string into an array of characters.
.reverse(): This reverses the array.
.join(''): This joins the reversed array back into a string.
onlyString === onlyString.split('').reverse().join(''): This checks if the cleaned string is equal to its reverse. If they are equal, it means the original string is a palindrome.*/