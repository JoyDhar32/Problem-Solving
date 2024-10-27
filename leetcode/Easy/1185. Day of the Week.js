const dayOfTheQeek = (day, month, year) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date= new Date(year, month - 1, day); // month is 0-indexed in Date object so we need to subtract 1 from the month (0-11)
    return days[date.getDay()]; // getDay() returns the day of the week (0-6) for the specified date according to local time    
};

console.log(dayOfTheQeek(31, 8, 2019));//Saturday
console.log(dayOfTheQeek(18, 7, 1999));//Sunday
console.log(dayOfTheQeek(15, 8, 1993));//Sunday

// Time Complexity: O(1)
// Space Complexity: O(1) because we are not using any extra space to store the result
//✅ Hints: use the Date object to get the day of the week for the specified date