/*
Given a string, find the number of different characters in it.

Example

For s = "cabca", the output should be differentSymbolsNaive(s) = 3.

There are 3 different characters a, b and c.

Hints

includes()
split()
push()
Input/Output

[execution time limit] 4 seconds (js)

[input] string s

A string of lowercase English letters.

Guaranteed constraints:

3 ≤ s.length ≤ 1000.

[output] integer
*/

function f(s) {
	return new Array(...new Set(s)).length;
}

//Dylan Israel предложил несколько решений, одно из которых создать 
//массив уникальных символов и пробегая в цикле по строке включать символ
//в массив уникальных, если его там нет. Затем вернуть длину массива.

module.exports = { f };
