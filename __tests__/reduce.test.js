const reduce = require("../Implementations/reduce");

test("No arguments sent", () => {
  expect(reduce()).toEqual(new Error("No Arguments supported"));
});

test("send an array only", () => {
  let testArr = [1, 2, 3];
  expect(reduce(testArr)).toEqual(new Error("Undefined is not a function"));
});

test("send a function only", () => {
  let testFun = function () {};
  expect(reduce(testFun)).toEqual(new Error(`${testFun} is not an array`));
});

test("send correct data, an array and a function with initial value", () => {
  const flatten = (previousValue, currentValue) =>
    previousValue.concat(currentValue);

  let arr = [
    [0, 1],
    [2, 3],
    [4, 5],
  ];
  expect(reduce(arr, flatten, [])).toEqual([0, 1, 2, 3, 4, 5]);
});

test("send correct data, an array and a function without initial value", () => {
  const flatten = (previousValue, currentValue) =>
    previousValue.concat(currentValue);

  let arr = [
    [0, 1],
    [2, 3],
    [4, 5],
  ];
  expect(reduce(arr, flatten)).toEqual([0, 1, 2, 3, 4, 5]);
});

test("send correct data, an array and a function without initial value", () => {
  const theSum = (...args) => {
    let sum = 0;

    for (let arg of args) sum += arg;

    return sum;
  };

  let nums = [1, 2, 3];
  expect(reduce(nums, theSum)).toBe(6);
});

test("send correct data, an array and a function with initial value", () => {
  const findSum = (...args) => {
    let sum = 0;

    for (let arg of args) sum += arg;

    return sum;
  };

  let arrNums = [1, 9, 20, 40, 5, 25];
  expect(reduce(arrNums, findSum, 0)).toBe(100);
});

test("send an object instead of an array", () => {
  let testF = function () {};
  let obj = { name: "nour", id: 123456 };
  expect(reduce(obj, testF)).toEqual(new Error(`${obj} is not an array`));
});

test("send empty array with a function and without an initial value", () => {
  let tester = function () {};
  expect(reduce([], tester)).toEqual(
    new Error("Reduce of empty array with no initial value")
  );
});

test("send empty array with a function and with an initial value", () => {
  let testerFn = function () {};
  expect(reduce([], testerFn, [1])).toEqual([1]);
});
