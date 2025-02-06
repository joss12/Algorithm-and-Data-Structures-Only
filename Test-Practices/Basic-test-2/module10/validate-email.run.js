const validateEmail = require("./validate-email");

const result1 = validateEmail('eg@gmail.com')
const result2 = validateEmail("egemail.com");

console.log(result1)
console.log(result2);
