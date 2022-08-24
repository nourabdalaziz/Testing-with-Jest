const map = function (array, callbackFun) {
  if (!array && !callbackFun) {
    throw new TypeError("missing arguments");
  } else if (!(array instanceof Array)) {
    throw new TypeError(`${array} is not an array`);
  } else if (array && !callbackFun) {
    throw new TypeError("undefined is not a function");
  }
  const mappedArray = [];

  for (let i = 0; i < array.length; i++) {
    mappedArray[i] = callbackFun(array[i]);
  }
  return mappedArray;
};
module.exports = map;
