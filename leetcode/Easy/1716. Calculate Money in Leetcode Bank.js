const totalMoney = (n)=>{
    let total=0;
    for(let day=1,week=0,dailySaving=0;day<=n; day++)
    {
        if(day%7===1){
            dailySaving++;
        }
        else dailySaving++;
        total+=dailySaving;
    }
    return total;
}
console.log(totalMoney(4)); // 10
console.log(totalMoney(10)); // 37
console.log(totalMoney(20)); // 96
console.log(totalMoney(100)); // 5000