let reduce = function (array, callbackFun, initialVal) {
  let result = initialVal;
  for (element of array) {
    result = callbackFun(result, element);
  }
  return result;
};

const theSum = (...args) => {
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
};

const flatten = (previousValue, currentValue) =>
  previousValue.concat(currentValue);

const groupObjects = (acc, obj, property) => {
  const key = obj[property];
  acc[key] ??= [];
  acc[key].push(obj);
  return acc;
};

// let arr = [1, 9, 20, 40, 5, 25];
// let x = reduceImplementation(arr, theSum,0);
// console.log(x);

// let arr = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ];
// let x = reduceImplementation(arr, flatten,[]);
// console.log(x);
module.exports = reduce;
