import isEven from '../is-even.js';
const test = QUnit.test;

test('test an even number', function(assert) {
    //Arrange
    const x = 666;
    const expected = true;

    //Act 
    const result = isEven(x);

    //Assert ('actual' vs. 'expected' order)
    assert.equal(result, expected);
});

test('test an odd number', function(assert) {
    //Arrange
    const x = 9;
    const expected = false;

    //Act 
    const result = isEven(x);

    //Assert ('actual' vs. 'expected' order)
    assert.equal(result, expected);
});
