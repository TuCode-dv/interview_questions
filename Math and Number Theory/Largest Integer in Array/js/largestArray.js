

function largestInteger (arr) {
  if (arr.length === 0) return;
  if (arr.length > 1_000_000) return;

  let maxInt = arr[0];
  for (let i of arr) {
    if (maxInt < i) {
      maxInt = i;
    }
  }
  return maxInt;
}


module.exports = largestInteger

console.log(largestInteger([12,-11,9,21,0]))
console.log(largestInteger([-21,-4,-99,0,-81]))
