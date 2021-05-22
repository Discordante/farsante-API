const {randomIntFromInterval} = require('../src/functions/functions')
const {dniGenerator} = require('../src/functions/functions')

//REGEX
const {NIF_REGEX, UPPERCASE} = require('../src/constants/regex')


describe('Random integer between 2 numbers', () => {
    test('Interval two positive integers', () => {
        expect(randomIntFromInterval(4,15)).toBeLessThanOrEqual(15)
        expect(randomIntFromInterval(4,15)).toBeGreaterThanOrEqual(4)
    })
    test('Interval two negative integers', () => {
        expect(randomIntFromInterval(-8,-4)).toBeLessThanOrEqual(-4)
        expect(randomIntFromInterval(-8,-4)).toBeGreaterThanOrEqual(-8)
    })
    test('Interval contains only one positive integer', () => {
        expect(randomIntFromInterval(7,7)).toBe(7)
        expect(randomIntFromInterval(0,0)).toBe(0)
    })
    test('Interval contains positive and negative number', () => {
        expect(randomIntFromInterval(-45,25)).toBeLessThanOrEqual(25)
        expect(randomIntFromInterval(-45,25)).toBeGreaterThanOrEqual(-45)
    })
});


describe('Generate random DNI', () => {
    test('Check DNI length', () => {
        expect(dniGenerator()).toHaveLength(9)
    })
    test('Check if the last character is an uppercase letter', () => {
        expect(dniGenerator().charAt(8)).toMatch( new RegExp (UPPERCASE))
    })
    test('Test 10 random DNI numbers with letter', () => {
        expect(dniGenerator()).toMatch( new RegExp (NIF_REGEX))
        expect(dniGenerator()).toMatch( new RegExp (NIF_REGEX))
        expect(dniGenerator()).toMatch( new RegExp (NIF_REGEX))
        expect(dniGenerator()).toMatch( new RegExp (NIF_REGEX))
        expect(dniGenerator()).toMatch( new RegExp (NIF_REGEX))
        expect(dniGenerator()).toMatch( new RegExp (NIF_REGEX))
        expect(dniGenerator()).toMatch( new RegExp (NIF_REGEX))
        expect(dniGenerator()).toMatch( new RegExp (NIF_REGEX))
        expect(dniGenerator()).toMatch( new RegExp (NIF_REGEX))
        expect(dniGenerator()).toMatch( new RegExp (NIF_REGEX))
    })
});

