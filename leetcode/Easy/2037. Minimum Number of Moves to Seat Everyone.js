const minMovesToSeat = (seats, students) => {
    seats.sort((a,b)=>(a-b));
    students.sort((a,b)=>(a-b));
    let moves=0;
    let seatLen=seats.length;
    let studentsLen=students.length;
    let max=Math.max(seatLen,studentsLen);
    for(let i=0; i<max;i++){
    moves +=Math.abs(seats[i]-students[i]);
    }
    return moves;
}

console.log(minMovesToSeat([3,1,5],[2,7,4])) // 4
console.log(minMovesToSeat([4,1,5,9],[1,3,2,6])) // 7
console.log(minMovesToSeat([2,2,6,6],[1,3,2,6])) // 4

// Time Complexity: O(nlogn)
// Space Complexity: O(1)
// ✅ Hints: Sorting and Greedy Approach