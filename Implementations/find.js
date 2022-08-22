let find = (array, callbackFun) => {
  let result = null;

  for (element of array) {
    if (callbackFun(element)) {
      result = element;
      break;
    }
  }

  return result;
};

function isCherries(fruit) {
  return fruit.name === "cherries";
}

function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

const inventory = [
  { name: "cherries", quantity: 5 },
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

console.log(find(inventory, isCherries));

const people = [
  { name: "nour", age: 22 },
  { name: "ahmad", age: 10 },
  { name: "sali", age: 15 },
];

console.log(find(people, ({ name }) => name === "ahmad"));

let numbers = [1, 2, 5, 7, 11, 14, 19, 17];
console.log(find(numbers, isPrime));
