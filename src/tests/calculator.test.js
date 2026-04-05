/**
 * Unit tests for calculator.js
 *
 * Covers all four basic arithmetic operations:
 *   add (+), subtract (-), multiply (*), divide (/)
 *
 * Includes example cases from the reference image:
 *   2 + 3, 10 - 4, 45 * 2, 20 / 5
 *
 * Also covers edge cases: division by zero, negatives, decimals, zero inputs.
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require("../calculator");

// ---------------------------------------------------------------------------
// Addition (+)
// ---------------------------------------------------------------------------
describe("add", () => {
  test("2 + 3 = 5 (image example)", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds two positive numbers", () => {
    expect(add(10, 15)).toBe(25);
  });

  test("adds a positive and a negative number", () => {
    expect(add(10, -4)).toBe(6);
  });

  test("adds two negative numbers", () => {
    expect(add(-7, -3)).toBe(-10);
  });

  test("adding zero returns the same number", () => {
    expect(add(42, 0)).toBe(42);
  });

  test("adds decimal numbers", () => {
    expect(add(1.5, 2.5)).toBeCloseTo(4.0);
  });
});

// ---------------------------------------------------------------------------
// Subtraction (-)
// ---------------------------------------------------------------------------
describe("subtract", () => {
  test("10 - 4 = 6 (image example)", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("subtracts two positive numbers", () => {
    expect(subtract(20, 8)).toBe(12);
  });

  test("subtracting a larger number gives a negative result", () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test("subtracting a negative number", () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test("subtracting zero returns the same number", () => {
    expect(subtract(99, 0)).toBe(99);
  });

  test("subtracts decimal numbers", () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

// ---------------------------------------------------------------------------
// Multiplication (*)
// ---------------------------------------------------------------------------
describe("multiply", () => {
  test("45 * 2 = 90 (image example)", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("multiplies two positive numbers", () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test("multiplying by zero returns zero", () => {
    expect(multiply(123, 0)).toBe(0);
  });

  test("multiplying by one returns the same number", () => {
    expect(multiply(55, 1)).toBe(55);
  });

  test("multiplying two negative numbers returns a positive result", () => {
    expect(multiply(-4, -5)).toBe(20);
  });

  test("multiplying a positive and a negative number returns a negative result", () => {
    expect(multiply(6, -3)).toBe(-18);
  });

  test("multiplies decimal numbers", () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10.0);
  });
});

// ---------------------------------------------------------------------------
// Division (/)
// ---------------------------------------------------------------------------
describe("divide", () => {
  test("20 / 5 = 4 (image example)", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("divides two positive numbers", () => {
    expect(divide(100, 4)).toBe(25);
  });

  test("divides resulting in a decimal", () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test("dividing zero by a number returns zero", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("dividing a negative number by a positive returns a negative result", () => {
    expect(divide(-12, 4)).toBe(-3);
  });

  test("dividing two negative numbers returns a positive result", () => {
    expect(divide(-15, -3)).toBe(5);
  });

  // Edge case: division by zero
  test("throws an error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
  });

  test("throws an error when dividing zero by zero", () => {
    expect(() => divide(0, 0)).toThrow("Division by zero is not allowed.");
  });
});

// ---------------------------------------------------------------------------
// Modulo (%)
// ---------------------------------------------------------------------------
describe("modulo", () => {
  test("5 % 2 = 1 (image example)", () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test("10 % 3 = 1", () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test("returns zero when evenly divisible", () => {
    expect(modulo(9, 3)).toBe(0);
  });

  test("modulo of zero by any non-zero number is zero", () => {
    expect(modulo(0, 7)).toBe(0);
  });

  test("works with negative dividend", () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  test("works with negative divisor", () => {
    expect(modulo(10, -3)).toBe(1);
  });

  test("works with both operands negative", () => {
    expect(modulo(-10, -3)).toBe(-1);
  });

  test("works with decimal numbers", () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  test("modulo of 1 is always 0 or 1", () => {
    expect(modulo(100, 1)).toBe(0);
  });

  // Edge case: division by zero
  test("throws an error when divisor is zero", () => {
    expect(() => modulo(10, 0)).toThrow("Division by zero is not allowed.");
  });

  test("throws an error when both operands are zero", () => {
    expect(() => modulo(0, 0)).toThrow("Division by zero is not allowed.");
  });
});

// ---------------------------------------------------------------------------
// Power (**)
// ---------------------------------------------------------------------------
describe("power", () => {
  test("2 ^ 3 = 8 (image example)", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("2 ** 8 = 256", () => {
    expect(power(2, 8)).toBe(256);
  });

  test("any number to the power of 0 is 1", () => {
    expect(power(99, 0)).toBe(1);
  });

  test("0 to the power of 0 is 1 (JavaScript convention)", () => {
    expect(power(0, 0)).toBe(1);
  });

  test("any number to the power of 1 is itself", () => {
    expect(power(7, 1)).toBe(7);
  });

  test("0 to any positive power is 0", () => {
    expect(power(0, 5)).toBe(0);
  });

  test("negative base with even exponent returns positive result", () => {
    expect(power(-3, 2)).toBe(9);
  });

  test("negative base with odd exponent returns negative result", () => {
    expect(power(-2, 3)).toBe(-8);
  });

  test("negative exponent returns a fraction", () => {
    expect(power(2, -1)).toBeCloseTo(0.5);
  });

  test("fractional exponent (square root via power)", () => {
    expect(power(9, 0.5)).toBeCloseTo(3);
  });

  test("large exponent", () => {
    expect(power(10, 6)).toBe(1000000);
  });
});

// ---------------------------------------------------------------------------
// Square Root (sqrt)
// ---------------------------------------------------------------------------
describe("squareRoot", () => {
  test("√16 = 4 (image example)", () => {
    expect(squareRoot(16)).toBe(4);
  });

  test("sqrt(9) = 3", () => {
    expect(squareRoot(9)).toBe(3);
  });

  test("sqrt(0) = 0", () => {
    expect(squareRoot(0)).toBe(0);
  });

  test("sqrt(1) = 1", () => {
    expect(squareRoot(1)).toBe(1);
  });

  test("sqrt(2) returns irrational result", () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142135);
  });

  test("sqrt(0.25) = 0.5", () => {
    expect(squareRoot(0.25)).toBeCloseTo(0.5);
  });

  test("sqrt of a perfect square returns an integer", () => {
    expect(squareRoot(100)).toBe(10);
  });

  test("sqrt of a large number", () => {
    expect(squareRoot(1000000)).toBe(1000);
  });

  // Edge cases: negative input
  test("throws an error for negative numbers", () => {
    expect(() => squareRoot(-1)).toThrow("Square root of a negative number is not allowed.");
  });

  test("throws an error for large negative numbers", () => {
    expect(() => squareRoot(-999)).toThrow("Square root of a negative number is not allowed.");
  });

  test("throws an error for small negative decimals", () => {
    expect(() => squareRoot(-0.0001)).toThrow("Square root of a negative number is not allowed.");
  });
});
