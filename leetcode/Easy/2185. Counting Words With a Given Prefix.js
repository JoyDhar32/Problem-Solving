const prefixCount = (words,pref) =>{
    let count = 0;
    for(let i=0;i<words.length;i++){
        if(words[i].startsWith(pref)){
            count++;
        }
    }
    return count;
}

// ✅ Beats 100% of JavaScript submissions in runtime
 console.log(prefixCount(["ab","abc","def","ghi"],"ab"));
 console.log(prefixCount(["ab","abc","def","ghi"],"de"));