const map = require("../Implementations/map");

test("No arguments sent", () => {
  expect(map()).toEqual(new Error("No Arguments supported"));
});

test("Null arguments", () => {
  expect(map(null, null)).toEqual(new Error("No Arguments supported"));
});

test("send an array only", () => {
  let testArr = [1, 2, 3];
  expect(map(testArr)).toEqual(new Error("Undefined is not a function"));
});

test("send a function only", () => {
  let testFun = function () {};
  expect(map(testFun)).toEqual(new Error(`${testFun} is not an array`));
});

test("send correct data, an array and a function", () => {
  let testF = (item) => item ** 2;
  let testA = [1, 2, 3];
  expect(map(testA, testF)).toEqual([1, 4, 9]);
});

test("send an object ", () => {
  let testF = (item) => item ** 2;
  let obj = { name: "nour", id: 123456 };
  expect(map(obj, testF)).toEqual(new Error(`${obj} is not an array`));
});

test("send a number instead of an array", () => {
  let testF = (item) => item ** 2;
  let x = 1;
  expect(map(x, testF)).toEqual(new Error(`${x} is not an array`));
});
test("send an array of objects", () => {
  let products = [
    { name: "tomato", price: 20 },
    { name: "grapes", price: 30 },
    { name: "potato", price: 45 },
  ];
  let doublePrice = (product) => product.price * 2;
  expect(map(products, doublePrice)).toEqual([40, 60, 90]);
});

test("send empty array with a functions", () => {
  let testFn = function () {};
  expect(map([], testFn)).toEqual([]);
});
