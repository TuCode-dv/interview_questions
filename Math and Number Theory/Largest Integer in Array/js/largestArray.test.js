
const findLargestInt = require("./largestArray.js");

//Test with positive integers
test("Find the largest positive integer",()=> {
  const numbers = [1,2,44,83,21,99];
  expect(findLargestInt(numbers)).toBe(99);
})

//Test for negative numbers
test("Find the largest negative integer",() => {
  const numbers = [-11,-22,-33,-55,-1];
  expect(findLargestInt(numbers)).toBe(-1);
});

//Test for no numbers
test("Array with no elements",()=> {
  const numbers = [];
  expect(findLargestInt(numbers)).toBeUndefined();
})
