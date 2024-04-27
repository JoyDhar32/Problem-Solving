var countMatches = function (items, ruleKey, ruleValue) {
    let count = 0;

    for (const item of items) {
        // Check if the current item matches the given rule
        if (
            (ruleKey === "type" && ruleValue === item[0]) ||
            (ruleKey === "color" && ruleValue === item[1]) ||
            (ruleKey === "name" && ruleValue === item[2])
        ) {
            count++;
        }
    }

    return count;
};

// Example usage:
const example1 = [["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]];
console.log(countMatches(example1, "color", "silver")); // Output: 1

const example2 = [["phone", "blue", "pixel"], ["computer", "silver", "phone"], ["phone", "gold", "iphone"]];
console.log(countMatches(example2, "type", "phone")); // Output: 2

// Time Complexity: O(n)
// Space Complexity: O(1)

// ✅ Beats 80.69%of users with JavaScript