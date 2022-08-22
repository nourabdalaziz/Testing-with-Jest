let reduce = function (array, callbackFun, initialVal) {
  if (!array && !callbackFun && !initialVal) {
    return new Error("No Arguments supported");
  } else if (!(array instanceof Array)) {
    return new Error(`${array} is not an array`);
  } else if (array && !callbackFun) {
    return new Error("Undefined is not a function");
  } else if (array.length == 0 && !initialVal) {
    return new Error("Reduce of empty array with no initial value");
  } else if (array.length == 0 && initialVal) {
    return initialVal;
  }

  if (!initialVal) {
    initialVal = array[0];
    array.shift();
  }

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

// const flattened = [].reduce(flatten, [1]);
// console.log(flattened);

module.exports = reduce;
