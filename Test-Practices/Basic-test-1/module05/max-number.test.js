const MaxNumber = require('./max-number');

test('Finding the maximum number in array', ()=>{
    expect(MaxNumber([1, 5, 3, 9, 2])).toBe(9);
    expect(MaxNumber([0, -1, -5, 2])).toBe(2);
    expect(MaxNumber([10, 10, 10, 10])).toBe(10);
})