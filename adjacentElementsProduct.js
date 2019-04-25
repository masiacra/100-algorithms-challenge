/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.

Hints

None
Input/Output

[time limit] 4000ms (js)
[input] array.integer inputArray
An array of integers containing at least two elements.

Guaranteed constraints:

2 ≤ inputArray.length ≤ 10, -1000 ≤ inputArray[i] ≤ 1000.

[output] integer
The largest product of adjacent elements.
*/

function adjacentElementsProduct(inputArray) {
	let max = arr[0] * arr[1];
	for (let i = 2; i < arr.length; i++) {
		let val = arr[i] * arr[i-1];
		if (val > max) {
			max = val;
		}
	}
	return max;
}


module.exports = { adjacentElementsProduct };
