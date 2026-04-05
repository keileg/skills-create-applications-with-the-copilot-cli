// Calculator module with arithmetic and extended operations

// Basic arithmetic operations

/**
 * addition - returns the sum of two numbers
 * @param {number} a - first operand
 * @param {number} b - second operand
 * @returns {number} the sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * subtraction - returns the difference of two numbers
 * @param {number} a - minuend
 * @param {number} b - subtrahend
 * @returns {number} the difference a minus b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * multiplication - returns the product of two numbers
 * @param {number} a - first factor
 * @param {number} b - second factor
 * @returns {number} the product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * division - returns the quotient of two numbers
 * @param {number} a - dividend
 * @param {number} b - divisor
 * @returns {number} the quotient a divided by b
 * @throws {Error} if b is zero
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

// Extended operations

/**
 * modulo - returns the remainder of a divided by b
 * @param {number} a - dividend
 * @param {number} b - divisor
 * @returns {number} the remainder of a divided by b
 * @throws {Error} if b is zero
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

/**
 * power - returns base raised to the exponent (exponentiation)
 * @param {number} base - the base number
 * @param {number} exponent - the exponent
 * @returns {number} base raised to the power of exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * squareRoot - returns the square root of n
 * @param {number} n - the number to find the square root of
 * @returns {number} the square root of n
 * @throws {Error} if n is negative
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
