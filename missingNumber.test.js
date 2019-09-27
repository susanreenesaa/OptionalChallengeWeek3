const findTheMissing= require('./week3OptionalChallenge');

test('Returns an error if the function is empty', () => {
    expect(
        findTheMissing()).toBe('Invalid input');
});

test('Returns an error if input is a string', () => {
    expect(findTheMissing('string')).toBe('Invalid input');
});

test('Does not accept numbers as input', () => {
    expect(findTheMissing(88)).toBe('Invalid input');
});

test('It returns missing numbers in an array', () => {
    expect(
        findTheMissing([0,4,6,8])
        ).toEqual([1,2,3,5,7]);
});