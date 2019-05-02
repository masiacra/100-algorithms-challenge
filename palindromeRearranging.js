/*
Given a string, find out if its characters can be rearranged to form a 
palindrome.

Example

For inputString = "aabb", the output should be 
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.

Hints

split()
hasOwnProperty()
Input/Output

[time limit] 4000ms (js)
[input] string inputString
A string consisting of lowercase English letters.

Guaranteed constraints:

1 ≤ inputString.length ≤ 50.

[output] boolean
true if the characters of the inputString can be rearranged to form a 
palindrome, false otherwise.
*/

function f(inpStr) {
	let dict = new Map();
	for (let ch of inpStr) {
		if (!dict.has(ch)) {
			dict.set(ch, 1);
		} else {
			let val = dict.get(ch);
			val++;
			dict.set(ch, val);
		}
	}
	let ind = inpStr.length % 2 === 0 ? true : false;
	for (let val of dict.values()) {
		if (val % 2 != 0) {
			if (ind) {
				return false;
			} else {
				ind = true;
			}
		}
	}
	return true;
}
//Dylan Israel вместо индикатора ind считает количество значений ключей,
//не делящихся нацело на 2. Если это число больше 1, то возвращает false. 

module.exports = { f };
