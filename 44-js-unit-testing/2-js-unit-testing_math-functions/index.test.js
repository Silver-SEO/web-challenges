import { add, subtract, multiply, divide } from "./index";

/* Add testing */
test("adds the numbers 2 and 3 correctly", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("adds the numbers 3 and 5- correctly", () => {
  const result = add(3, -5);
  expect(result).toBeLessThan(-1);
});

test("adds the numbers 0.1 and 0.2 correctly", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.2999);
});

/* Subtract testing */

test("subtract the numbers 15 and 5 correctly", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("subtract the numbers 5 and 15 correctly", () => {
  const result = subtract(5, 15);
  expect(result).toBeLessThan(-1);
});

/* Multiply testing */

test("multiply the numbers 2 and 4 correctly", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("multiply the numbers -2 and 4 correctly", () => {
  const result = multiply(-2, 4);
  expect(result).toBeLessThan(0);
});

test("multiply the numbers 2 and -4 correctly", () => {
  const result = multiply(2, -4);
  expect(result).toBeLessThan(0);
});

test("multiply the numbers -2 and -4 correctly", () => {
  const result = multiply(-2, -4);
  expect(result).toBeGreaterThan(0);
});

/* Divide testing */

test("divide the numbers 9 and 3 correctly", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

test("returns: You should not do this! if called with 0 as second argument", () => {
  const result = divide(9, 0);
  expect(result).toBe("You should not do this!");
});
