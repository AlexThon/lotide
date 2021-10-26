const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }

};

const head = function(list) {
  return list[0]||undefined;
};

// TEST CODE
assertEqual(head([]), undefined);
assertEqual(head(["Hello","Lighthouse","Labs"]),"Hello");

