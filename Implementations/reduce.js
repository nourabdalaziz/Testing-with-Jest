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

module.exports = reduce;
