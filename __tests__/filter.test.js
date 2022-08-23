const filter = require("../Implementations/filter");

test("No arguments sent", () => {
  expect(filter()).toEqual(new Error("No Arguments supported"));
});

test("send an array only", () => {
  let testArr = [1, 2, 3];
  expect(filter(testArr)).toEqual(new Error("Undefined is not a function"));
});

test("send a function only", () => {
  let testFun = function () {};
  expect(filter(testFun)).toEqual(new Error(`${testFun} is not an array`));
});

test("send an object instead of an array", () => {
  let testF = function () {
    /*do something*/
  };
  let obj = { name: "nour", id: 123456 };
  expect(filter(obj, testF)).toEqual(new Error(`${obj} is not an array`));
});

test("send correct data, an array and a function", () => {
  function filterByID(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
      return true;
    }
    return false;
  }
  const arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: "undefined" },
  ];
  expect(filter(arr, filterByID)).toEqual([
    { id: 15 },
    { id: -1 },
    { id: 3 },
    { id: 12.2 },
  ]);
});

test("send correct data, an array and a function", () => {
  let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" },
  ];
  expect(filter(users, (item) => item.id < 3)).toEqual([
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
  ]);
});

test("send empty array with a function ", () => {
  let tester = function () {
    /**do something */
  };
  expect(filter([], tester)).toEqual([]);
});

test("No such element found", () => {
  let employees = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" },
  ];
  expect(filter(employees, (item) => item.id < 0)).toEqual([]);
});
