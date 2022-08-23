let map = function (array, callbackFun) {
  mappedArray = [];

  if (!array && !callbackFun) {
    return new Error("No Arguments supported");
  } else if (!(array instanceof Array)) {
    return new Error(`${array} is not an array`);
  } else if (array && callbackFun == undefined) {
    return new Error("Undefined is not a function");
  }

  for (let i = 0; i < array.length; i++) {
    mappedArray[i] = callbackFun(array[i]);
  }
  return mappedArray;
};
module.exports = map;
