const nextGreatestLetter = (letters, target) => {
    let left = 0;
    let right = letters.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (letters[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    let output= letters[left % letters.length];
    return output;
};

// Test cases
console.log(nextGreatestLetter(["c", "f", "j"], "a")); // "c"
console.log(nextGreatestLetter(["c", "f", "j"], "c")); // "f"
console.log(nextGreatestLetter(["c", "f", "j"], "d")); // "f"

// Time Complexity: O(log n) where n is the number of elements in the array letters
// Space Complexity: O(1)
// ✅Hints: This code passed all the test cases and is correct.

/* Question Explanation:
Input:

A sorted array of characters letters in non-decreasing order.
A character target.
Task:

Find the smallest character in letters that is greater than target.
If no character is greater than target, return the first character in letters.
Output:

A single character based on the conditions above.
Examples:
Input: letters = ["c", "f", "j"], target = "a"

Output: "c" (smallest character greater than 'a').
Input: letters = ["c", "f", "j"], target = "c"

Output: "f" (smallest character greater than 'c').
Input: letters = ["x", "x", "y", "y"], target = "z"

Output: "x" (no character is greater than 'z', so return the first character).

*/

/* Approach:
1. Initialize two pointers left and right to 0 and length of letters - 1 respectively.
2. Iterate the while loop until left is less than or equal to right.
3. Calculate the mid element of the array.
4. If the mid element is less than or equal to the target, update the left pointer to mid + 1.
5. Otherwise, update the right pointer to mid - 1.
6. After the loop completes, return the element at the index left % letters.length.
7. This is because the left pointer might go out of bounds, so we need to take the modulo of the length of the array.
8. Return the output.
*/