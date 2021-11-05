const suma = require('./suma');

test('1 + 2 = 3', () =>{
    expect(suma(1, 2)).toBe(7);
})

test('a + 2 = NaN', () =>{
    expect(suma('a', 2)).toBe(NaN);
})