// return head of an array
// check if head as a value or undfined

const assertEqual = require('./assertEqual');
const head = function(list) {
  return list[0] || undefined;
};

module.exports = head;

