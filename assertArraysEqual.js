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
  
  