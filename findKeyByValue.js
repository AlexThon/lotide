const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
  
};

// takes in an object and a value
// return the first key which contains the given value
// edgeCase: If no key return undefined.

const findKeyByValue = (ourObject, value) => {
  for (const key in ourObject) {
    if (ourObject[key] !== value) {
      return;
    }
    return key;
  }
};

const mySister = {firstName: "Ador", education: "University"};


(assertEqual(findKeyByValue(mySister, "Ador"), "firstName"));