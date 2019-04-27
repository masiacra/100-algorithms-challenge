/*
Given the string, check if it is a palindrome.

Example

For inputString = "aabaa", the output should be 
checkPalindrome(inputString) = true;
For inputString = "abac", the output should be 
checkPalindrome(inputString) = false;
For inputString = "a", the output should be 
checkPalindrome(inputString) = true.
Hints

toLowerCase()
split()
reverse()
join()
Input/Output

[time limit] 4000ms (js)
[input] string inputString
A non-empty string consisting of lowercase characters.

Guaranteed constraints:

1 ≤ inputString.length ≤ 105.

[output] boolean

true if inputString is a palindrome, false otherwise.
*/


//в этом варианте приведу более классическое решение
function f(str) {
	str = str.split('');
	let stack = [];
	for (let symb of str) {
		stack.push(symb);
	}
	
	for (let i = 0; i < str.length; i++) {
		if (str[i] != stack.pop()) return false;
	}
	return true;
	
	
}

module.exports = { f };
