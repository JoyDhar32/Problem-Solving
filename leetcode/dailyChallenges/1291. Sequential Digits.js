const sequentialDigits =(low, high)=>{
    let result = [];
    for(let i=1; i<=9; i++){
        let num = i;
        for(let j=i+1; j<=9; j++){
            num = num*10 + j;
            if(num>=low && num<=high){
                result.push(num);
            }
        }
    }
    return result.sort((a,b)=>a-b);
}
console.log(sequentialDigits(100,300)); //[123,234]
console.log(sequentialDigits(1000,13000)); //[1234,2345,3456,4567,5678,6789,12345]
console.log(sequentialDigits(10,1000000000)); //[12,23,34,45,56,67,78,89,123,234,345,456,567,678,789,1234,2345,3456,4567,5678,6789,12345,23456,34567,45678,56789,123456,234567,345678,456789,1234567,2345678,3456789,12345678,23456789,123456789]