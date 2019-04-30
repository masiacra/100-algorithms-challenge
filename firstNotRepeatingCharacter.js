/*
Note: Write a solution that only iterates over the string once and uses 
O(1) additional memory, since this is what you would be asked to do 
during a real interview.

Given a string s, find and return the first instance of a non-repeating 
character in it. If there is no such character, return '_'.

Example

For s = "abacabad", the output should be 
firstNotRepeatingCharacter(s) = 'c'.
There are 2 non-repeating characters in the string: 'c' and 'd'. Return 
c since it appears in the string first.

For s = "abacabaabacaba", the output should be 
firstNotRepeatingCharacter(s) = '_'.
There are no characters in this string that do not repeat.

Hints

split()
hasOwnProperty()
Input/Output

[execution time limit] 5 seconds (ts)

[input] string s A string that contains only lowercase English letters.

Guaranteed constraints:

1 ≤ s.length ≤ 10^5.

[output] char The first non-repeating character in s, or '_' if there 
are no characters that do not repeat.
*/


function f(str) {
	let map = new Map();

	for (let symb of str) {
		if (!map.has(symb)) {
			map.set(symb, 1);
		} else {
			map.set(symb, 2);
		}
	}
	for (let [key, val] of map) {
		if (val === 1) {
			return key;
		}
	}
	return '_';
}

//Dylan Israel предлагает в объекте отслеживать индекс и количесвто совпадений.
//После цикла по строке, которую она разбивает splitом на символы, 
//он проходит в цикле по объекту и отслеживает минимальный индес не повторяющегося
//символа и возвращает такой символ.

module.exports = { f };
