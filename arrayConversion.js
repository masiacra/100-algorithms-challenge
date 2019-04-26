/*
Given an array of 2k integers (for some integer k), perform the 
following operations until the array contains only one element:

On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of 
consecutive elements with their sum;
On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive 
elements with their product. After the algorithm has finished, there 
will be a single element left in the array. Return that element.

Example
For inputArray = [1, 2, 3, 4, 5, 6, 7, 8], the output should be 
arrayConversion(inputArray) = 186.

We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186], 
so the answer is 186.

Hints

push()
Input/Output

[execution time limit] 5 seconds (ts)
[input] array.integer inputArray
Guaranteed constraints:

1 ≤ inputArray.length ≤ 20,

-9 ≤ inputArray[i] ≤ 99.

[output] integer
*/


function f(inputArray) {
	

	
	let k = 1;
	while (inputArray.length > 1) {
		let aux = [];
		for (let i = 0; i < inputArray.length; i += 2) {
			let val;
			if (k % 2 != 0) {
				val = inputArray[i] + inputArray[i+1];
			} else {
				val = inputArray[i] * inputArray[i+1];
			}
			aux.push(val);
		}
		inputArray = aux;
		k++;
	}
	return inputArray[0];
}


//Dylan Israel вместо счетчика циклов ввел булеву переменную,
//которая является индикатором четный цикл происходит
//или нечетный


module.exports = { f };
