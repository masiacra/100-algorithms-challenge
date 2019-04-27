/*
Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be 
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

Hints

split()
hasOwnProperty()
Input/Output

[time limit] 4000ms (js)
[input] string s1
A string consisting of lowercase latin letters a-z.

Guaranteed constraints:

1 ≤ s1.length ≤ 15.

[input] string s2
A string consisting of lowercase latin letters a-z.

Guaranteed constraints:

1 ≤ s2.length ≤ 15.

[output] integer
*/

function f(s1, s2) {
	let obj1 = Object.create(null);
	s1.split('').forEach( symb => {
		if (symb in obj1) {
			let val = obj1[symb];
			val++;
			obj1[symb] = val;
		} else {
			obj1[symb] = 1;
		}
	});
	let obj2 = Object.create(null);
	s2.split('').forEach( symb => {
		if (symb in obj2) {
			let val = obj2[symb];
			val++;
			obj2[symb] = val;
		} else {
			obj2[symb] = 1;
		}
	});
	let count = 0;
	for (let key in obj1) {
		if (key in obj2) {
			count += obj1[key] < obj2[key] ? obj1[key] : obj2[key];
		}
	}
	return count;
	
	
}


module.exports = { f };
