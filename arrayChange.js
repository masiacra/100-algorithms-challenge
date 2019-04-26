/*
You are given an array of integers. On each move you are allowed to 
increase exactly one of its element by one. Find the minimal number of 
moves required to obtain a strictly increasing sequence from the input.

Example

For inputArray = [1, 1, 1], the output should be arrayChange(inputArray) = 3.

Input/Output

[time limit] 4000ms (js)
[input] array.integer inputArray
Guaranteed constraints:

3 ≤ inputArray.length ≤ 105,

-105 ≤ inputArray[i] ≤ 105.

[output] integer
The minimal number of moves needed to obtain a strictly increasing 
sequence from inputArray. It's guaranteed that for the given test cases 
the answer always fits signed 32-bit integer type.
*/


/* решение в лоб
function f(inputArr) {
	let count = 0;
	for (let i = 1; i < inputArr.length; i++) {
		if (inputArr[i] <= inputArr[i-1]) {
			while (inputArr[i] <= inputArr[i-1]) {
				inputArr[i] += 1;
				count++;
			}
		}
	}
	return count;
}
*/

//оптимизация
function f(inputArray) {
	let count = 0;
	for (let i = 1; i < inputArray.length; i++) {
		if (inputArr[i] <= inputArr[i-1]) {
			let val = inputArr[i-1] - inputArr[i] + 1;
			count += val;
			inputArr[i] += val;
		}
	}
	return count;
}

module.exports = { f };
