const defangIPaddr = (address) => {
    return address.replace(/\./g, '[.]');
    };

console.log(defangIPaddr("1.1.1.1"));
console.log(defangIPaddr("255.100.50.0"));

// time complexity: O(n)
// space complexity: O(n)

// ✅ Beats 96.25%of users with JavaScript

