const areAllChar = require('./all-char-unique');

test('Unique Characters in a String', ()=>{
    expect(areAllChar('abcdefg')).toBe(true)
    expect(areAllChar('abcdefgA')).toBe(true)
    expect(areAllChar('programming')).toBe(false)
    expect(areAllChar('')).toBe(true)
    expect(areAllChar('a')).toBe(true)
})