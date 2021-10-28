

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


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (!eqObjects(actual, expected)) {
    console.log(`🛑️ Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  } else {
    console.log(`✅️ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  }
};

assertObjectsEqual({a:"1",b:"5",c: "9"}, {b:"6", c:"9",a:"1"});