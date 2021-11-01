const assertEqual = require('../assertEqual.js');
const head = require('../head.js');
assertEqual(head([]), undefined);
assertEqual(head(["Hello","Lighthouse","Labs"]),"Hello");
// head([]);
// head(["Hello","Lighthouse","Labs"]);