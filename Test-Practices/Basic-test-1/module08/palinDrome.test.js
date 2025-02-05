const isPalinDrome = require('./palinDrome');

test('Checking for palindrome strings', ()=>{
    expect(isPalinDrome('racecar')).toBe(true);
    expect(isPalinDrome('Hello')).toBe(false);
    expect(isPalinDrome('A man, a plan, a canal, Panama')).toBe(true);
    expect(isPalinDrome('12321')).toBe(true);
})