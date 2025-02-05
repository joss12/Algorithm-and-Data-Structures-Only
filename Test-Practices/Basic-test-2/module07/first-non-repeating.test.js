const findFirstCharacter = require('./first-non-repeating')

test('Find first Non-Repeating Character', ()=>{
    expect(findFirstCharacter('aabccdeff')).toBe('b');
    expect(findFirstCharacter('aabbcc')).toBe(null);
    expect(findFirstCharacter('hello world')).toBe('h')
})