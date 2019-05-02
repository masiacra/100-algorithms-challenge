/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English 
word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Example

pigLatin("glove") should return "oveglay".
pigLatin("eight") should return "eightway".
Hints

split()
test()
join()
push()
*/

function f(word) {
	word = word.split('');
	
	if (/[aeoui]/.test(word[0])) {
		word.push('way');
	} else {
		let postfix = '';
		while (!/[aeoui]/.test(word[0])) {
			postfix += word.shift();
		}
		postfix += 'ay';
		word.push(postfix);
	}
	
	
	return word.join('');
}


module.exports = { f };
