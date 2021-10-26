const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "bootcamp");
assertEqual(1,1);