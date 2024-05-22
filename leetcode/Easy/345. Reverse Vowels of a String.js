const reverseVowels =(s)=>{
    let vowels = 'aeiouAEIOU';
    let arr = s.split('');
    let i = 0;
    let j = arr.length - 1;
    while(i < j){
        if(vowels.includes(arr[i]) && vowels.includes(arr[j])){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
        if(!vowels.includes(arr[i])){
            i++;
        }
        if(!vowels.includes(arr[j])){
            j--;
        }
    }
    return arr.join(''); 

}

console.log(reverseVowels('hello'));//holle
console.log(reverseVowels('leetcode'));//leotcede
console.log(reverseVowels('aA'));//Aa

// Time Complexity: O(n)
// Space Complexity: O(n) because of the array created from the string
// ✅ This is a Two Pointer problem