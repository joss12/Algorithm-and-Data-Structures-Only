const removeDuplicate = require('./remove-duplicate');

const result  = removeDuplicate([
    1,
    2,
    3,
    5,
    5,
    6,
    7,
    8.,
    'hello',
    'hello',
    true,
    true,
]);

console.log(result)