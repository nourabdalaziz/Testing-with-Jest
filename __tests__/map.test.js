const map = require("../Implementations/map");

test("No arguments sent", () => {
  expect(() => {
    map();
  }).toThrow("missing argument");
});

test("send an array only", () => {
  let testArr = [1, 2, 3];
  expect(() => {
    map(testArr);
  }).toThrow("undefined is not a function");
});

test("send a function only", () => {
  const testFun = (item) => item ** 2;
  expect(() => {
    map(testFun);
  }).toThrow(`${testFun} is not an array`);
});

test("send correct data, an array and a function", () => {
  const testF = (item) => item ** 2;
  let testA = [1, 2, 3];
  expect(map(testA, testF)).toEqual([1, 4, 9]);
});

test("send an object instead of an array ", () => {
  const testF = (item) => item ** 2;
  let obj = { name: "nour", id: 123456 };
  expect(() => {
    map(obj, testF);
  }).toThrow(`${obj} is not an array`);
});

test("send a number instead of an array", () => {
  const testF = (item) => item ** 2;
  let x = 1;
  expect(() => {
    map(x, testF);
  }).toThrow(`${x} is not an array`);
});

test("send an array of objects", () => {
  const doublePrice = (product) => product.price * 2;

  let products = [
    { name: "tomato", price: 20 },
    { name: "grapes", price: 30 },
    { name: "potato", price: 45 },
  ];

  expect(map(products, doublePrice)).toEqual([40, 60, 90]);
});

test("send empty array with a function", () => {
  const testFn = (item) => item ** 2;
  expect(map([], testFn)).toEqual([]);
});
