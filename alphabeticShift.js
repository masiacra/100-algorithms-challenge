/*
Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

Example

For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".

Hints

split()
indexOf()
join()
Input/Output

[time limit] 4000ms (js)
[input] string inputString
Non-empty string consisting of lowercase English characters.

Guaranteed constraints:

1 ≤ inputString.length ≤ 10.

[output] string
The result string after replacing all of its characters.
*/


function f(str) {
	str = str.split('').map( symb => {
		let code = symb.charCodeAt() + 1;
		if (code > 122) code = 97;
		return String.fromCharCode(code);
	});
	return str.join('');
}


module.exports = { f };
