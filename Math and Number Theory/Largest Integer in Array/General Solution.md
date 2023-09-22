### Solution One: Brute force
One of the solutions is to go through the entire array comparing each element of the array to determine which element is larger 

Given:
```shell
[12,-11,9,21,0]
```
The steps for arriving at the solution are:
1. Take the first element of the array i.e. `arr[0]` and make it the maximum `maxInt = arr[0]`.
2. Iterate through the array and swap the `maxInt` with the largest element of the array.
```
if maxInt < arr[i]
	maxInt = arr[i]
```
3. Add the constraints 
```
//The first constraint
if arr is empty:
	return None
//The second constraint
if arr.length > 10^6
	return None
```