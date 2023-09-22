```js
const LargestInt = (arr) => {
  if (arr.length < 1) return;
  if (arr.length > 1_000_000) return;
  let maxInt = arr[0];
  for (let i of arr) {
    if (maxInt < i) {
      maxInt = i;
    }
  }
  return maxInt;
}

```
