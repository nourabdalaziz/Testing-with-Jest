const reduce = function (array, callbackFun, initialVal) {
  if (!array && !callbackFun) {
    throw new TypeError("missing arguments");
  } else if (!(array instanceof Array)) {
    throw new TypeError(`${array} is not an array`);
  } else if (array && !callbackFun) {
    throw new TypeError("undefined is not a function");
  } else if (array.length == 0 && !initialVal) {
    throw new TypeError("Reduce of empty array with no initial value");
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

module.exports = reduce;
