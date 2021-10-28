// function take array and a itemsToRemove array
// return a new array with only items not in input array

const without = (arrayA, itemsToRemove) => {
  let newArray = [];

  if (itemsToRemove.length < 1) {
    return;
  }
  for (let item of arrayA) {
    if (!itemsToRemove.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
};


const eqArrays = (arrayA, arrayB) => {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (const item of arrayB) {
    if (!arrayA.includes(item)) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual,expected)) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
    return;
  }
  console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
};
  

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
assertArraysEqual(without(words, ["lighthouse"]),["hello","world"]);
