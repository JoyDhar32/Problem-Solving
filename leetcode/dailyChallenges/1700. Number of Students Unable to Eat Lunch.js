const countStudents =(students, sandwiches)=>{

    let unableToEatCount = 0;

    while (students.length > 0) {
        if (students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
            unableToEatCount = 0;
        } else {
            students.push(students.shift());
            unableToEatCount++;
            if (unableToEatCount === students.length) {
                break;
            }
        }
    }

    return students.length;
}

console.log(countStudents([[1,1,0,0]],[0,1,0,1])) 

// Time Complexity: O(n)
// Space Complexity: O(n)
// ✅ Hints: using Shift Unshift