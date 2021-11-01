const assertArraysEqual = require('../assertArraysEqual.js');
const tail = require('../tail.js');
assertArraysEqual(tail([1,3,4,5]), [3,4,5]);

