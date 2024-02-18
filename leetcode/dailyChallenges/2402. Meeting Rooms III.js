const mostBooked = (n, meetings) => {

        const roomsMeetingsCounter = new Array(n).fill(0);
       const availableRooms = new Array(n).fill(-1);
       
       meetings.sort((a, b) => a[0] - b[0]);
   
       meetings.forEach(meeting => {
           const [start, end] = meeting;
           let earliestRoomIdx = 0;
           let earliestEndTime = Number.MAX_SAFE_INTEGER;
           let isAvailableRoomExist = false;
   
           for (let i = 0; i < n; i++) {
               if (availableRooms[i] <= start) {
                   roomsMeetingsCounter[i]++;
                   availableRooms[i] = end;
                   isAvailableRoomExist = true;
                   break;
               }
   
               if (availableRooms[i] < earliestEndTime) {
                   earliestEndTime = availableRooms[i];
                   earliestRoomIdx = i;
               }
           }
   
           if (!isAvailableRoomExist) {
               roomsMeetingsCounter[earliestRoomIdx]++;
               availableRooms[earliestRoomIdx] += end - start;
           }
       });
   
       return roomsMeetingsCounter.indexOf(Math.max(...roomsMeetingsCounter));

};

console.log(mostBooked(3, [[1, 2], [2, 3], [3, 4]])); // Output: 3
console.log(mostBooked(3, [[1, 2], [2, 3], [2, 4]])); // Output: 2
console.log(mostBooked(3, [[1, 2], [2, 3], [3, 4], [4, 5]])); // Output: 3

// Time complexity is O(nlogn)
// Space complexity is O(n)
// ✅ Hints: Using Priority Queue to solve the problem