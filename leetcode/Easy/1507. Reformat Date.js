const reformatDate = (date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];    
    const [day, month, year] = date.split(' ');
   const dayNum = day.slice(0, day.length - 2).padStart(2, '0');
    const monthNum = (months.indexOf(month) + 1).toString().padStart(2, '0');
    return `${year}-${monthNum}-${dayNum}`;
};

console.log(reformatDate("20th Oct 2052"));//2052-10-20
console.log(reformatDate("6th Jun 1933"));//1933-06-06
console.log(reformatDate("26th May 1960"));//1960-05-26
console.log(reformatDate("16th Dec 2020"));//2020-12-16

// Time Complexity: O(1)
// Space Complexity: O(1) because we are not using any extra space to store the result
// ✅ Hints: use the Date object to get the day of the week for the specified date