
// function should return an array with only the middle element(s)
// edgeCase I: arrays with odd number of elements, a single middle element should be returned.
// edgeCase II: with an even number of elements, an array OF two elements in the middle should be returned
// edgeCase III: For arrays with one return []
// edgecase IV:  two elements, there is no middle. Return [].



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
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
    return;
  }
  console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
};

const middle = function(alist) {
  if (alist.length <= 2) {
    return [];
  }
  if (alist.length % 2 !== 0) {
    let index = Math.floor(alist.length / 2);
    return alist[index];
  }
  let mindleIndex = Math.floor(alist.length / 2);
  return alist.splice(mindleIndex - 1, mindleIndex);
};


assertArraysEqual(middle([1,3,4,5]),[3,4]);
assertArraysEqual(middle([1,4,5]),[3,4]);



