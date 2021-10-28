
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
    
  






const letterPositions = (strings) => {
  const letterPosition = {};
  for (let index = 0; index < strings.length; index++) {
    // check if the value for the key is undefined
    // if so then it will initialize the value to the curent index
    if (!letterPosition[strings[index]]) {
      letterPosition[strings[index]] = [index];
    } else {
      // It will reach here when the key already have a value - [value]
    // index is added to the current array
      letterPosition[strings[index]].push(index);
    }
  }
  return letterPosition;
};

assertArraysEqual(letterPositions("bootcamp").o, [1,2]);