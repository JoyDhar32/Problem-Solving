const distributeCandies = (candies, num_people) => {
    const result = Array(num_people).fill(0);
    let i = 0;
    while (candies > 0) {
        result[i % num_people] += Math.min(candies, i + 1);
        candies -= i + 1;
        i++;
    }
    return result;
};

console.log(distributeCandies(7, 4)) // [1, 2, 3, 1]
console.log(distributeCandies(10, 3)) // [5, 2, 3]
console.log(distributeCandies(10, 4)) // [1, 2, 3, 4]
console.log(distributeCandies(10, 1)) // [10]

// time complexity: O(n)
// space complexity: O(n)
// ✅ Hint: Round Robin Fusion

/* 
Let's go through the example distributeCandies(10, 3):

Initial State:

candies = 10
num_people = 3
res = [0, 0, 0]
i = 0
First Iteration (i = 0):

res[0 % 3] += Math.min(10, 1) => res[0] += 1 => res = [1, 0, 0]
candies -= 1 => candies = 9
i++ => i = 1
Second Iteration (i = 1):

res[1 % 3] += Math.min(9, 2) => res[1] += 2 => res = [1, 2, 0]
candies -= 2 => candies = 7
i++ => i = 2
Third Iteration (i = 2):

res[2 % 3] += Math.min(7, 3) => res[2] += 3 => res = [1, 2, 3]
candies -= 3 => candies = 4
i++ => i = 3
Fourth Iteration (i = 3):

res[3 % 3] += Math.min(4, 4) => res[0] += 4 => res = [5, 2, 3]
candies -= 4 => candies = 0
i++ => i = 4
At this point, candies is 0, so the loop terminates, and the function returns the result [5, 2, 3].
*/