#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add        (+)   - Addition: sum two numbers
 *   subtract   (-)   - Subtraction: find the difference between two numbers
 *   multiply   (*)   - Multiplication: compute the product of two numbers
 *   divide     (/)   - Division: divide one number by another (returns error on division by zero)
 *   modulo     (%)   - Modulo: remainder of a divided by b (returns error on division by zero)
 *   power      (**)  - Exponentiation: base raised to the exponent
 *   squareRoot (sqrt)- Square root of n (returns error for negative numbers)
 *
 * Usage:
 *   node calculator.js <operation> <num1> [num2]
 *
 * Examples:
 *   node calculator.js add 5 3           => 8
 *   node calculator.js subtract 10 4     => 6
 *   node calculator.js multiply 6 7      => 42
 *   node calculator.js divide 20 4       => 5
 *   node calculator.js modulo 10 3       => 1
 *   node calculator.js power 2 8         => 256
 *   node calculator.js squareRoot 9      => 3
 */

/**
 * Addition (+): returns the sum of a and b.
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtraction (-): returns the difference of a minus b.
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplication (*): returns the product of a and b.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Division (/): returns the quotient of a divided by b.
 * Throws an error if b is zero to prevent division by zero.
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

/**
 * Modulo (%): returns the remainder of a divided by b.
 * Throws an error if b is zero.
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a % b;
}

/**
 * Power (**): returns base raised to the power of exponent.
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Square Root (sqrt): returns the square root of n.
 * Throws an error if n is negative.
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error("Square root of a negative number is not allowed.");
  }
  return Math.sqrt(n);
}

const unaryOperations = { squareRoot };
const binaryOperations = { add, subtract, multiply, divide, modulo, power };
const operations = { ...binaryOperations, ...unaryOperations };

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

function main() {
  const [, , operation, arg1, arg2] = process.argv;

  if (!operation || arg1 === undefined) {
    console.error("Usage: node calculator.js <add|subtract|multiply|divide|modulo|power|squareRoot> <num1> [num2]");
    process.exit(1);
  }

  if (!operations[operation]) {
    console.error(`Unknown operation: "${operation}". Supported: add, subtract, multiply, divide, modulo, power, squareRoot`);
    process.exit(1);
  }

  const a = parseFloat(arg1);
  if (isNaN(a)) {
    console.error("num1 must be a valid number.");
    process.exit(1);
  }

  try {
    if (unaryOperations[operation]) {
      const result = unaryOperations[operation](a);
      console.log(`${operation}(${a}) = ${result}`);
    } else {
      if (arg2 === undefined) {
        console.error(`Operation "${operation}" requires two numbers.`);
        process.exit(1);
      }
      const b = parseFloat(arg2);
      if (isNaN(b)) {
        console.error("num2 must be a valid number.");
        process.exit(1);
      }
      const result = binaryOperations[operation](a, b);
      console.log(`${a} ${operation} ${b} = ${result}`);
    }
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
