const maxLength = (arr) =>{
    let max = 0;
    let set = new Set();
    set.add("");
    for(let i = 0; i < arr.length; i++){
        let temp = new Set();
        for(let j of set){
            let concat = j + arr[i];
            if(isUnique(concat)){
                temp.add(concat);
                max = Math.max(max, concat.length);
            }
        }
        set = new Set([...set, ...temp]);
    }
    return max;
}
const isUnique = (str) =>{
    let set = new Set(str);
    return set.size === str.length;
}
console.log(maxLength(["un","iq","ue"])); // 4
console.log(maxLength(["cha","r","act","ers"])); // 6
console.log(maxLength(["abcdefghijklmnopqrstuvwxyz"])); // 26
console.log(maxLength(["yy","bkhwmpbiisbldzknpm"])); // 0
console.log(maxLength(["a","abc","d","de","def"])); // 6