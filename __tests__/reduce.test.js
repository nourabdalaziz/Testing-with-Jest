import reduce from "../Implementations/reduce";

test("No arguments sent", () => {
  expect(() => {
    reduce();
  }).toThrow("missing argument");
});

test("send an array only", () => {
  let testArr = [1, 2, 3];
  expect(() => {
    reduce(testArr);
  }).toThrow("undefined is not a function");
});

test("send a function only", () => {
  const testFun = () => {};
  expect(() => {
    reduce(testFun);
  }).toThrow(`${testFun} is not an array`);
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

test("send an object instead of an array ", () => {
  const testF = () => {};

  let obj = { name: "nour", id: 123 };
  expect(() => {
    reduce(obj, testF);
  }).toThrow(`${obj} is not an array`);
});

test("send empty array with a function and without an initial value", () => {
  const tester = () => {};
  expect(() => {
    reduce([], tester);
  }).toThrow("Reduce of empty array with no initial value");
});

test("send empty array with a function and with an initial value", () => {
  const tester = () => {};
  expect(reduce([], tester, [1])).toEqual([1]);
});

test(" handling an initial accumulator value of `undefined`", () => {
  const tester = () => {};
  expect(reduce([1, 2], tester, undefined)).toBeUndefined();
});
