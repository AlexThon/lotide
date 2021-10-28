const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
    
};

// The function should take in a sentence (as a string)
// return a count of each of the letters in that sentence.
// edge case I: non letter character
// edge case II: whether the key is initialize in the new object or not


const countLetters = (strings) => {
  const lettersCount = {};
  for (const letter of strings) {
    if (letter) {
      if (!lettersCount[letter]) {
        lettersCount[letter] = 1;
      } else {
        lettersCount[letter]++;
      }
    }
  }
  return lettersCount;
};


assertEqual(countLetters("lighthouse")['h'], 2);

