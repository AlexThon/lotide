
const without = (arrayA, arrayB) => {
  if (!arrayB.length) {
    return arrayA;
  }
  for (const item of arrayB) {
    if (arrayA.includes(item)) {
      return;
    }
  }
  return arrayA;
};

const assertArraysEqual = (actual, expected) => {
  if (actual.length !== expected.length) {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
    return;
  }
  for (const current of expected) {
    if (!actual.includes(current)) {
      console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
      return;
    }
  }
  console.log(`Assertion Passed: [${actual}] === [${expected}]`);
};
  

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
assertArraysEqual(words, ["hello", "world", "lighthouse"]);