/*
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Example

reverseAString('hello') returns 'olleh';
reverseAString('Howdy') returns 'ydwoH';
*/


function f(str) {
	let result = '';
	for (let i = str.length - 1; i >= 0; i--) {
		result += str[i];
	}
	return result;
}

module.exports = { f };
