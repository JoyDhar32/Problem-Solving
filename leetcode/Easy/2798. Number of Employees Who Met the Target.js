const numberOfEmployeesWhoMetTarget =(hours,target)=>{
    let qualify=0;
    for(i=0;i<hours.length;i++){
        if(hours[i]>=target){
            qualify++;
        }
    }
    return qualify;
}
console.log(numberOfEmployeesWhoMetTarget([2,3,5,6],3));
console.log(numberOfEmployeesWhoMetTarget([1,2,3,4,5],6));
console.log(numberOfEmployeesWhoMetTarget([2,2,3,4],1));
// Time Complexity: O(n)
// Space Complexity: O(1)
// ✅ Hints: Count the number of employees who have worked more than or equal to the target hours.