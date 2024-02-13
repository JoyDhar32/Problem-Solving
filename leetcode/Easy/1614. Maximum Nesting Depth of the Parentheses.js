const maxPer= (s) =>{
    let output =0;
    let leftP=0;
    for(let i=0;i<s.length;i++){
        if(s[i]==='('){
            leftP++;
            output=Math.max(output,leftP);
        }
        else if(s[i]===')'){
            leftP--;
        }
    }
    return output;
}
console.log(maxPer("(1+(2*3)+((8)/4))+1"));//3
console.log(maxPer("(1)+((2))+(((3)))"));//3
console.log(maxPer("1+(2*3)/(2-1)"));//1