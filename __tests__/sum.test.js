const theSum = require("../Implementations/sum");

test("Return the number", () => {
  expect(theSum(10)).toBe(10);
});

test("return the num1+num2 sum of two numbers", () => {
  expect(theSum(10, 15)).toBe(25);
});

test("return the sum of three numbers", () => {
  expect(theSum(10, 20, 70)).toBe(100);
});


test('return 0 if no number', () => { 
    expect(theSum()).toBe(0);
 })