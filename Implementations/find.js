let find = (array, callbackFun) => {
  if (!array && !callbackFun) {
    return new Error("No Arguments supported");
  } else if (!(array instanceof Array)) {
    return new Error(`${array} is not an array`);
  } else if (array && !callbackFun) {
    return new Error("Undefined is not a function");
  } else if (array.length == 0) {
    return new Error("Undefined");
  }

  let result = null;

  for (element of array) {
    if (callbackFun(element)) {
      result = element;
      break;
    }
  }

  return result;
};

module.exports = find;
