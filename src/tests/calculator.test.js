const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('Basic arithmetic operations', () => {
  // addition
  test('addition: adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('addition: adds negative numbers', () => {
    expect(add(-1, -2)).toBe(-3);
  });

  // subtraction
  test('subtraction: subtracts two numbers', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtraction: result can be negative', () => {
    expect(subtract(3, 7)).toBe(-4);
  });

  // multiplication
  test('multiplication: multiplies two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('multiplication: multiplies by zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });

  // division
  test('division: divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('division: throws error on division by zero', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
  });
});

describe('Extended operations', () => {
  // modulo
  test('modulo: returns remainder of division', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('modulo: returns 0 when evenly divisible', () => {
    expect(modulo(9, 3)).toBe(0);
  });

  test('modulo: throws error on modulo by zero', () => {
    expect(() => modulo(5, 0)).toThrow('Modulo by zero is not allowed');
  });

  // power (exponentiation)
  test('power: raises base to exponent', () => {
    expect(power(2, 10)).toBe(1024);
  });

  test('power: any number to the power of 0 is 1', () => {
    expect(power(5, 0)).toBe(1);
  });

  test('power: handles negative exponent', () => {
    expect(power(2, -1)).toBeCloseTo(0.5);
  });

  // square root
  test('squareRoot: returns square root of a positive number', () => {
    expect(squareRoot(9)).toBe(3);
  });

  test('squareRoot: returns square root of 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('squareRoot: throws error for negative numbers', () => {
    expect(() => squareRoot(-1)).toThrow('Cannot calculate square root of a negative number');
  });
});
