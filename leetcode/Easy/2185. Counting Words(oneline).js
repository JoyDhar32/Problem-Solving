const prefixCount = (words, pref) =>{ return words.filter(word => word.startsWith(pref)).length;}
console.log(prefixCount(["ab","abc","def","ghi"],"ab"));
console.log(prefixCount(["ab","abc","def","ghi"],"de"));

// time complexity: O(n)
// space complexity: O(1)
// ✅Hint: Use the filter method to filter out the words that start with the given prefix. Then, return the length of the filtered array.