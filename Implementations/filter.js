const filter = (array, callbackFun) => {
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
      matchObjs = hasKeys.filter((obj) => obj[key] === callbackFun[key]);
    }
    return matchObjs;
  } 
  
  else if (array && typeof callbackFun === "string") {
    let key = callbackFun;
    let matchObjs = [];
    for (let obj of array) {
      if (key in obj && obj[key]) {
        matchObjs.push(obj);
      }
    }
    return matchObjs;
  }

  let result = [];

  for (element of array) {
    if (callbackFun(element)) {
      result.push(element);
    }
  }
  /* edit:
     we can use reduce function as the following :

     const result=array.reduce((prev,curr)=>{
      if(callbackFun(curr)){
        return [...prev,curr];
      }
      return prev;
     },[]);
  */

  return result;
};

export default filter;