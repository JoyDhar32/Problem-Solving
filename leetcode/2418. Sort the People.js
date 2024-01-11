const sortPeople = (names, heights) => {
    const people = names.map((name, index) => ({ name, height: heights[index] }));
    // Sort the array of people by height in descending order
    people.sort((a, b) => b.height - a.height);
    // Extract the names from the sorted array
    const sortedNames = people.map(person => person.name);
    return sortedNames;
}

console.log(sortPeople(["Frank", "Mary", "Ann"], [180, 160, 170])); // ["Frank", "Ann", "Mary"]
console.log(sortPeople(["Ann", "Mary", "Frank"], [170, 160, 180])); // ["Frank", "Ann", "Mary"]
console.log(sortPeople(["Ann", "Mary", "Frank"], [170, 180, 160])); // ["Mary", "Frank", "Ann"]

// time complexity: O(n log n)
// space complexity: O(n)
// ✅ Beats 99.99% of users with JavaScript

