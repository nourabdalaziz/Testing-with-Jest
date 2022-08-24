let find = (array, callbackFun) => {
  if (!array && !callbackFun) {
    throw new TypeError("missing arguments");
  } else if (!(array instanceof Array)) {
    throw new TypeError(`${array} is not an array`);
  } else if (array && !callbackFun) {
    throw new TypeError("undefined is not a function");
  }

  for (element of array) {
    if (callbackFun(element)) {
      return element;
    }
  }

  //return undefined when no element found or the array sent is is empty
  return undefined;
};
module.exports = find;
