/*
How many strings equal to a can be constructed using letters from the 
string b? Each letter can be used only once and in one string only.

Example For a = "abc" and b = "abccba", the output should be 
stringsConstruction(a, b) = 2.

We can construct 2 strings a with letters from b.

Hints

hasOwnProperty()
push()
Math.floor()
Math.min()
split()
Input/Output

[execution time limit] 5 seconds (ts)
[input] string a
String to construct, a contains only lowercase English letters.

Guaranteed constraints:

3 ≤ a.length ≤ 10.

[input] string b
String containing needed letters, b contains only lowercase English 
letters.

Guaranteed constraints:

3 ≤ b.length ≤ 50.

[output] integer
*/

function f(a, b) {
	const dict = new Map();
	for (let ch of a) {
		dict.set(ch, 0);
	}
	for (let ch of b) {
		if (dict.has(ch)) {
			let val = dict.get(ch);
			val++;
			dict.set(ch, val);
		}
	}
	let min = 10000000;
	for (let val of dict.values()) {
		if (val < min) {
			min = val;
		}
	}
	return min;
}

//Dylan Israel создает частотный словарь для двух строк.
//Далее в цикле заполняет массив counts, в который заносит округление
//от деления частоты появления символа в строке b на появление символа 
//в строке a. возвращает минимальное значение из этого массива.

module.exports = { f };
