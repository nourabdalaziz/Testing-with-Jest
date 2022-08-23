let filter = (array, callbackFun) => {
  if (!array && !callbackFun) {
    return new Error("No Arguments supported");
  } else if (!(array instanceof Array)) {
    return new Error(`${array} is not an array`);
  } else if (array && !callbackFun) {
    return new Error("Undefined is not a function");
  }

  let result = [];

  for (element of array) {
    if (callbackFun(element)) {
      result.push(element);
    }
  }

  return result;
};
module.exports = filter;
