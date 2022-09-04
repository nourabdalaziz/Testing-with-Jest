const find = (array, callbackFun) => {
  if (!array && !callbackFun) {
    throw new TypeError("missing arguments");
  } else if (!(array instanceof Array)) {
    throw new TypeError(`${array} is not an array`);
  } else if (array && !callbackFun) {
    throw new TypeError("undefined is not a function");
  } 
  
  else if (array && typeof callbackFun === "object") {
    let keys = Object.keys(callbackFun);
    for (let key of keys) {
      hasKeys = array.filter((obj) => obj.hasOwnProperty(key));
      matchesObjs = hasKeys.filter((obj) => obj[key] === callbackFun[key]);
      
    }
   return matchesObjs[0];
  }
  
  else if (array && typeof callbackFun === "string") {
    let key=callbackFun;
    for (let obj of array) {
      if((key in obj)&&obj[key]){
        return obj;
      }
    }
  }


  for (element of array) {
    if (callbackFun(element)) {
      return element;
    }
  }

  //return undefined when no element found or the array sent is is empty
  return undefined;
};

export default find;