const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 30940;
    actual = sum(10000,20940);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -34;
    actual = sum(-11,-23);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 99;
    actual = sum(99,0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expected = 7;
    actual = subtract(19,12);
    expect(actual).toBe(expected);
  });

  test('can subtract two large numbers', () => {
    expected = -189316115328;
    actual = subtract(8921374890,198237490218);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {

  test('can multiply two small numbers', () => {
    expected = 70;
    actual = multiply(10,7);
    expect(actual).toBe(expected);
  });

  test('can multiply negative large numbers', () => {
    expected = 1768472277;
    actual = multiply(-8921,-198237);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {

  test('can divide two numbers', () => {
    expected = 2.4;
    actual = divide(12,5);
    expect(actual).toBe(expected);
  });

  test('can divide two large negative numbers', () => {
    expected = 200;
    actual = divide(4000000,20000);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {

  test('can modulus of two small numbers', () => {
    expected = 3;
    actual = modulus(53,5);
    expect(actual).toBe(expected);
  });

  test('can modulus of two large numbers', () => {
    expected = 4568;
    actual = modulus(783424324,24214);
    expect(actual).toBe(expected);
  });

});

describe('even', () => {

  test('can correctly identify an even number', () => {
    actual = even(18);
    expect(actual).toBeTruthy();
  });

  test('can correctly identify a very large number that is not even', () => {
    actual = even(98234713);
    expect(actual).toBeFalsy();
  });

});

describe('odd', () => {

  test('can correctly idenfity a small odd number', () => {
    actual = odd(9);
    expect(actual).toBeTruthy();
  });

  test('can correclty identify an extremely large number that is not odd', () => {
    actual = odd(420934823098);
    expect(actual).toBeFalsy();
  });

});
