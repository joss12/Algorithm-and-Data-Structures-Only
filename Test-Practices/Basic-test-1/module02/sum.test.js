const getSum = require('./sum');

test("Get the sum of two number", ()=>{
    //Test case inputs
    const num1 = 6;
    const num2 = 4;

    //Call the function
    const result = getSum(num1, num2)

    //check if the result is equal to the expected sum
    expect(result).toBe(10)
})