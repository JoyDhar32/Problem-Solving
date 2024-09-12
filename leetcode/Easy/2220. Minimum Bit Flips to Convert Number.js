const minBitFlips = (start,goal)=>{
    let flips = 0;
    for(let i=0;i<start.length;i++){
        if(start[i] !== goal[i]){
            if(i+1>start.length-1) return -1;
            flips++;
            for(let j=i;j<i+start.length;j++){
                if(start[j] === '0') start = start.substring(0,j) + '1' + start.substring(j+1);
                else start = start.substring(0,j) + '0' + start.substring(j+1);
            }
        }
    }
    return flips;
}

// Test cases
console.log(minBitFlips("10111","10000")); // Output: 3
