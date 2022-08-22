/*const theSum = (num1, num2,num3) => {
  return (num1||null) + (num2 || null)+ (num3 || null);
};*/

/*
const theSum = (...args) => {
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
};*/

const theSum = (...args) => {
  return args.reduce((pv, cv) => pv + cv, 0);
};

module.exports = theSum;
