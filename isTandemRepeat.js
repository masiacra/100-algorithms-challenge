/*
Determine whether the given string can be obtained by one concatenation 
of some string to itself.

Example

For inputString = "tandemtandem", the output should be 
isTandemRepeat(inputString) = true;
For inputString = "qqq", the output should be 
isTandemRepeat(inputString) = false;
For inputString = "2w2ww", the output should be 
isTandemRepeat(inputString) = false.
Hints

slice()
Input/Output

[time limit] 4000ms (js)
[input] string inputString
Guaranteed constraints:

2 ≤ inputString.length ≤ 20

[output] boolean
true if inputString represents a string concatenated to itself, 
false otherwise.
*/

function f(inputStr) {
	const leftHalf = inputStr.slice(0, Math.floor(inputStr.length / 2));
	const rightHalf = inputStr.slice(Math.floor(inputStr.length / 2));
	return leftHalf === rightHalf;
}


module.exports = { f };
