const map = function (array, callbackFun) {
  if (!array && !callbackFun) {
    throw new TypeError("missing arguments");
  } else if (!(Array.isArray(array) || typeof array === "object")) {
    throw new TypeError(`${array} is not an array or an object`);
  } else if (
    typeof array === "object" &&
    !Array.isArray(array) &&
    callbackFun
  ) {
    if (typeof callbackFun === "string") {
      let key = callbackFun;
      let matchedValues = [];
      for (let obj of array) {
        if (key in obj && obj[key]) {
          matchedValues.push(obj[key]);
        }
      }
      return matchedValues;
    } else {
      let vals = Object.values(array).filter((val) => Number(val));
      array = vals;
    }
  } else if (array && !callbackFun) {
    /* handle the falsy array, if the array is full with falsey values
    and no callback fun sent, then make a default fun to call that
    returns empty array.
    or throw an error in case of which the array is not full with
    falsey values and no callback function sent 
    
    */
    let trues = array.filter((val) => val == true);
    if (!trues.length) {
      callbackFun = () => [];
    } else {
      throw new TypeError(`${callbackFun} is not a function`);
    }
  } else if (array && typeof callbackFun === "string") {
    let key = callbackFun;
    let matchedValues = [];
    for (let obj of array) {
      if (key in obj && obj[key]) {
        matchedValues.push(obj[key]);
      }
    }
    return matchedValues;
  }

  const mappedArray = [];

  for (let i = 0; i < array.length; i++) {
    mappedArray[i] = callbackFun(array[i]);
  }
  return mappedArray;
};
// export default map;
module.exports = map;
