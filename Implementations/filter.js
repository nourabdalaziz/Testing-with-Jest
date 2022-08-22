let filter = (array, callbackFun) => {
  let result = [];

  for (element of array) {
    if (callbackFun(element)) {
      result.push(element);
    }
  }

  return result;
};

function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

console.log(filter(users, (item) => item.id < 3));

const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];

let invalidEntries = 0;
console.log(filter(arr, filterByID));
console.log(invalidEntries);
