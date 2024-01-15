const truncateSentence = (s, k) => {
    return s.split(' ').slice(0,k).join(' ');
}
console.log(truncateSentence("Hello how are you Contestant", 4));
console.log(truncateSentence("What is the solution to this problem", 4));
console.log(truncateSentence("chopper is not a tanuki", 5));
// time complexity: O(n)
// space complexity: O(n)

// ✅ Beats 90.87%of users with JavaScript