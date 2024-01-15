const removeOuterParentheses =(s) =>{
    let count = 0;
    let result = '';
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            if(count > 0){
                result += '(';
            }
            count++;
        }else{
            count--;
            if(count > 0){
                result += ')';
            }
        }
    }
    return result;
}

console.log(removeOuterParentheses("(()())(())"));//()()()
console.log(removeOuterParentheses("(()())(())(()(()))"));//()()()()(())
console.log(removeOuterParentheses("()()"));//""

//✅ Beats 88.32%of users with JavaScript submissions