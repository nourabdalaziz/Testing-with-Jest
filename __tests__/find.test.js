const find = require("../Implementations/find");

test("No arguments sent", () => {
  expect(() => {
    find();
  }).toThrow("missing argument");
});

test("send an array only", () => {
  let testArr = [1, 2, 3];
  expect(() => {
    find(testArr);
  }).toThrow("undefined is not a function");
});

test("send a function only", () => {
  const testFun = () => {};
  expect(() => {
    find(testFun);
  }).toThrow(`${testFun} is not an array`);
});

test("send correct data, an array and a function", () => {
  const isCherries = (fruit) => fruit.name === "cherries";

  const inventory = [
    { name: "cherries", quantity: 5 },
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];
  expect(find(inventory, isCherries)).toEqual({
    name: "cherries",
    quantity: 5,
  });
});

test("send correct data, an array and a function -2-", () => {
  function isPrime(element) {
    if (element === 1) {
      return false;
    } else if (element > 1) {
      for (let i = 2; i < element; i++) {
        if (element % i == 0) {
          return false;
        }
      }
      return true;
    }
  }
  let numbers = [1, 2, 5, 7, 11, 14, 19, 17];

  expect(find(numbers, isPrime)).toBe(2);
});

test("send an array of objects with a function", () => {
  const people = [
    { name: "nour", age: 22 },
    { name: "ahmad", age: 10 },
    { name: "sali", age: 15 },
  ];

  expect(find(people, ({ name }) => name === "ahmad"));
});

test("send empty array with a function", () => {
  let tester = () => {};
  expect(find([], tester)).toBeUndefined();
});

test("No such element found", () => {
  expect(find([1, 2, 3], (x) => x < 0)).toBeUndefined();
});
