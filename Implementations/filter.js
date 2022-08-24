const filter = (array, callbackFun) => {
  if (!array && !callbackFun) {
    throw new TypeError("missing arguments");
  } else if (!(array instanceof Array)) {
    throw new TypeError(`${array} is not an array`);
  } else if (array && !callbackFun) {
    throw new TypeError("undefined is not a function");
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
module.exports = filter;
