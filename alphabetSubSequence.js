/*
Check whether the given string is a subsequence of the plaintext alphabet.

Example

For s = "effg" or s = "cdce", the output should be alphabetSubsequence(s) = false

For s = "ace" or s = "bxz", the output should be alphabetSubsequence(s) = true.

Hints

size property
charCodeAt()
Input/Output

[execution time limit] 5 seconds (ts)
[input] string s
Guaranteed constraints:

2 ≤ s.length ≤ 15.

[output] boolean

true if the given string is a subsequence of the alphabet, false otherwise.

*/

//Последовательно проходим по строке и смотрим, чтобы значения юникода
//каждого символа было больше предыдущего.
//Напомню, что 'a'.charCodeAt() = 97, 'z'.charCodeAt() = 122

function f(str) {
	let points = 96;
	str = str.toLowerCase();
	for (let symb of str) {
		if (symb.charCodeAt() <= points) {
			return false;
		} else {
			points = symb.charCodeAt();
		}
	}
	return true;
}

console.log(f('zab'));

/*
Дилан Израель предлагает создать массив из строки, преобразовать его 
в массив длин, из этого массива создать set и сравнить длину set с 
массивом длин. Далее он также проходит и проверяет, чтобы юникод 
какого-либо элемента не был больше или равен предыдущему.
*/

module.exports = { f };
