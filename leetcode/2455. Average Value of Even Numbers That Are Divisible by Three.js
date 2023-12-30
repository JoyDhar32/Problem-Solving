const averageValue = function(nums){
    let sum=0,count=0;
    for(let i of nums){
        if(i%2==0 && i%3==0){
            sum=sum+i; 
            count++;
        }
    }
    if(count===0) return 0;
    return Math.floor(sum/count);  // need to use floor method to round down the number ;
}

console.log(averageValue([1,3,6,10,12,15]))
console.log(averageValue([1,3,6,10,12,15,55,66]))
console.log(averageValue([94,65,82,40,79,74,92,84,37,19,16,85,20,79,25,89,55,67,84,3,79,38,16,44,2,54,58,94,69,71,14,24,13,21]))
