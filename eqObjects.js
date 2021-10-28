const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
  
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

const eqObjects = function(objectA, objectB) {
  if (Object.keys(objectA).length !== Object.keys(objectB).length) {
    return false;
  }
  for (let key in objectA) {
    // case where the value is an array
    if (Array.isArray(objectA[key])) {
      if (!eqArrays(objectA[key], objectB[key]))
        return false;
    } else if (typeof objectA[key] === "object") { // check if the value is another object
      return eqObjects(objectA[key], objectB[key]); // call eqObjects recursively
    } else if (objectA[key] !== objectB[key]) return false;
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false); // => false