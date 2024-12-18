const numRescueBoats = (people, limit) => {
    people.sort((a, b) => a - b); // Sort the people array in ascending order
    let i = 0;
    let j = people.length - 1;
    let boats = 0;
    while (i <= j) {
        if (people[i] + people[j] <= limit) {
            i++;
        }
        j--;
        boats++;
    }
    return boats;
};

// Test cases
console.log(numRescueBoats([1, 2], 3)); // 1
console.log(numRescueBoats([3, 2, 2, 1], 3)); // 3

// Time Complexity: O(n log n) due to sorting
// Space Complexity: O(1) since we are using a constant amount of extra space

// ✅Hints: Sort the people array. Use two pointers, i and j, to represent the lightest and heaviest person respectively. Move the heaviest person to the boat first if their weight is within the limit. Move the lightest person to the boat next if their weight is within the limit. Increment the number of boats used. Repeat this process until the two pointers meet. Return the number of boats used.

/*Explanation:
What do we need to find?
We need to calculate the minimum number of boats required to carry all the people.

Examples Explained

Example 1:
Input: people = [1, 2], limit = 3
We can pair the two people together:
1 + 2 = 3 (within the limit).
So, 1 boat is enough.
Example 2:
Input: people = [3, 2, 2, 1], limit = 3
Sort the weights: [1, 2, 2, 3]
Pair the lightest (1) with the heaviest (2).
Remaining weights: [2, 3].
Result: 3 boats:
Boat 1: (1, 2) (2 people).
Boat 2: (2) (1 person).
Boat 3: (3) (1 person).
Example 3:
Input: people = [3, 5, 3, 4], limit = 5
Sort the weights: [3, 3, 4, 5]
The heaviest (5) cannot pair with anyone, so it gets its own boat.
Pair the next heaviest (4) with the lightest (3), but the total is 7, which is greater than the limit. So, 4 gets its own boat.
Pair the remaining two 3s.
Result: 4 boats:
Boat 1: (5) (1 person).
Boat 2: (4) (1 person).
Boat 3: (3) (1 person).
Boat 4: (3) (1 person).
*/

/* Approach :
1. Sort the people array in ascending order.
2. Initialize two pointers i and j to the start and end of the array respectively.
3. Initialize a variable boats to store the number of boats required.
4. Iterate until the two pointers meet:
    a. If the sum of the weights of the people at i and j is less than or equal to the limit, move the lighter person to the boat.
    b. Move the heavier person to the boat.
    c. Increment the number of boats used.
5. Return the number of boats used.
*/
