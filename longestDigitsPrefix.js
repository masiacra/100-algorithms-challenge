/*
Given a string, output its longest prefix which contains only digits.

Example

For inputString="123aa1", the output should be 
longestDigitsPrefix(inputString) = "123".

Hints

split()
includes()
push()
join()
Input/Output

[time limit] 4000ms (js)
[input] string inputString
Guaranteed constraints:

3 ≤ inputString.length ≤ 35.

[output] string
*/

function f(inpStr) {
	inpStr = inpStr.split('');
	let result = [];
	for (let i = 0; i < inpStr.length; i++) {
		if ('1234567890'.includes(inpStr[i])) {
			result.push(inpStr[i]);
		} else {
			break;
		}
	}
	return result.join('');
}

module.exports = { f };
