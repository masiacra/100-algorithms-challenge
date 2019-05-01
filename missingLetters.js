/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Example

missingLetters("abce") should return "d".
missingLetters("abcdefghjklmno") should return "i".
missingLetters("abcdefghijklmnopqrstuvwxyz") should return undefined.
Hints

split()
*/


function f(str) {
	str = str.split('');
	let begin = str[0].charCodeAt();
	let end = str[str.length - 1].charCodeAt();
	for (let i = begin+1; i < end; i++) {
		let ch = String.fromCharCode(i);
		if (str.indexOf(ch) < 0) return ch;
	}
}

//Dylan Israel создал дополнитель массив прописных букв английского алфавита
//если у него i-ый символ входной строки не равен i-ом символу алфавита,
//то он возвращает i-ый символ алфавита


module.exports = { f };
