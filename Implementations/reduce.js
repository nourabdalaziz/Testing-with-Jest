const reduce = function (array, callbackFun, initialVal) {
  if (!array && !callbackFun) {
    throw new TypeError("missing arguments");
  } else if (!(array instanceof Array)) {
    throw new TypeError(`${array} is not an array`);
  } else if (array && !callbackFun) {
    throw new TypeError("undefined is not a function");
  } 
  else if (!array.length && !initialVal) {
    throw new TypeError("Reduce of empty array with no initial value");
  } 
  else if (!array.length && initialVal) {
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
console.log([[],{}].map(function(){}))
console.log(reduce([1,2],function(){},undefined))

export default reduce;