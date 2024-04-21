var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
         return "";
     }
 
     // Sort the array to easily compare the first and last strings
     console.log(strs.sort());
 
     // Compare the first and last strings
     let firstStr = strs[0];
     let lastStr = strs[strs.length - 1];
     let commonPrefix = "";
 
     // Iterate through characters of the first string
     for (let i = 0; i < firstStr.length; i++) {
         // If characters match in the first and last strings, add to common prefix
         if (firstStr[i] === lastStr[i]) {
             commonPrefix += firstStr[i];
         } else {
             // If characters don't match, break the loop
             break;
         }
     }
 
     return commonPrefix; 
 };

    console.log(longestCommonPrefix(["reflower","flow","flight"])); // ""
    console.log(longestCommonPrefix(["dog","racecar","car"])); // ""
    console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"

    // time complexity: O(n)
    // space complexity: O(1)
    // ✅ Hint: Sort the array to easily compare the first and last strings. Then, iterate through the characters of the first string and compare them with the last string. If the characters match, add them to the common prefix. If they don't match, break the loop.

    // ✅ Beats 100% of JavaScript submissions in runtime

