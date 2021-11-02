
// function should return an array with only the middle element(s)
// edgeCase I: arrays with odd number of elements, a single middle element should be returned.
// edgeCase II: with an even number of elements, an array OF two elements in the middle should be returned
// edgeCase III: For arrays with one return []
// edgecase IV:  two elements, there is no middle. Return [].


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

module.exports = middle;



