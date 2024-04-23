//https://leetcode.com/problems/number-of-senior-citizens/post-solution/?submissionId=1160841246

const countSeniors = (details) => {
    let result = 0;
    for (let i = 0; i < details.length; i++) {
        let age1 = details[i].charAt(11);
        let age2 = details[i].charAt(12);
        let age = parseInt(age1 + age2);
        if (age > 60) {
            result++;
        }
    }
    return result;
}
console.log(countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"]));
console.log(countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"]));

// Time Complexity: O(n)
// Space Complexity: O(1)
// ✅ Hints: Using String and Array