const groupAnagrams = (strs) => {
  const map = new Map();
  for (let str of strs) {
    const key = str.split('').sort().join('');
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(str);
  }
  return Array.from(map.values());
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))//[
//   ["bat"],
//   ["nat","tan"],
//   ["ate","eat","tea"]
// ]
// time complexity is O(n)
// space complexity is O(n)
// ✅ Hints : Use a map to group the anagrams together.