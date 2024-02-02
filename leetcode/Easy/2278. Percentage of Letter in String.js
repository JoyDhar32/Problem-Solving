const percentageLetter =(s,letter)=>{
    let count=0;
    let whole=s.length;
    for(let i=0;i<whole;i++){
        if(s[i]===letter){
            count++;
        }
    }
    return Math.trunc((count/whole)*100); 
}
console.log(percentageLetter("hello","l"));//40
console.log(percentageLetter("hello","h"));//20
console.log(percentageLetter("hello","e"));//20
console.log(percentageLetter("foobar","o"));//33
console.log(percentageLetter("sgawtb","s"));//16

// Time Complexity: O(n)
// Space Complexity: O(1)
// ✅ Hint: Use the count variable to store the count of the letter in the string and then calculate the percentage.