/*
You are given a two-digit integer n. Return the sum of its digits.

Example

For n = 29, the output should be addTwoDigits(n) = 11.

Hint

split()
parseInt()
toString()
reduce()
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A positive two-digit integer.

Guaranteed constraints:

10 ≤ n ≤ 99.

[output] integer

The sum of the first and second digits of the input number.

*/

//Автор курса предлагает превратить число в строку и разбить split('').
//Я подумал несколько по другому.

function addTwoDigits(n) {
	let result = [];
	while (n > 0) {
		result.push( n % 10);
		n = Math.floor(n / 10);
	}
	return result.reduce( (sum, cur) => sum + cur);
}


module.exports = { addTwoDigits };
