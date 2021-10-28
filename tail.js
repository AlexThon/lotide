// compare elements in a to those in b
// irrespective of the position each elements occupies
const assertEqual = (actual, expected) => {
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



//Create a function tail which returns the "tail" of an array

const tail = function(aList) {
  if (aList.length < 1) {
    return undefined;
  } else {
    return [...aList].slice(1);
  }
};

assertEqual(tail([1,3,4,5]), [3,4,5]);


