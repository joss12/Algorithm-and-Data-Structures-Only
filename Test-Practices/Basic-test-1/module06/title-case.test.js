const titleCase = require('./title-case')

test('Converting string to title case', ()=>{
    expect(titleCase('hello world')).toBe('Hello World')
    expect(titleCase('Javascript programming')).toBe('Javascript Programming')
    expect(titleCase('openai chatbot')).toBe('Openai Chatbot')
})