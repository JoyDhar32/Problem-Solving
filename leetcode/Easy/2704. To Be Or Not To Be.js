var expect = function (val) {
    let toBe = (temp) => {
        if (val === temp) {
            return true;
        }
        else {
            throw new Error("Not Equal")
        }
    }

    let notToBe = (temp) => {
        if (val !== temp) {
            return true;
        }
        else {
            throw new Error("Equal")
        }
    }

    return { toBe, notToBe };

}

let result = expect(5).toBe(5);
console.log(result); // true

// throw new Error("Not Equal") will throw an error
// time complexity: O(1)
// space complexity: O(1)
// ✅ Hint: Use the throw statement to throw an error if the condition is not met.