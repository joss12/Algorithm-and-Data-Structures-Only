const removeDuplicate = require('./remove-duplicate');

test('Removing duplicates from an array', ()=>{
    expect(removeDuplicate([1, 2, 3, 2, 4, 1, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(removeDuplicate(['appel', 'banana', 'orange', 'banana', 'kiwi'])).toEqual(['appel', 'banana', 'orange', 'kiwi'])
    expect(removeDuplicate([true, true, false, true, false])).toEqual([
        true,
        false
    ]);
});