/*
You are implementing your own HTML editor. To make it more comfortable 
for developers you would like to add an auto-completion feature to it.

Given the starting HTML tag, find the appropriate end tag which your 
editor should propose.

If you are not familiar with HTML, consult with this note.

Example

For startTag = "<BUTTON TYPE=\'BUTTON\' DISSABLED>", the output should 
be htmlEndTagByStartTag(startTag) = "</BUTTON>";

For startTag = "<i>", the output should be 
htmlEndTagByStartTag(startTag) = "</i>".

Hints

split()
toString()
Input/Output

[execution time limit] 5 seconds (ts)

[input] string startTag

The total number of legs in the house.

Guaranteed constraints:

3 ≤ startTag.length ≤ 75.

[output] string
*/


function f(tag) {
	tag = tag.split('');
	let closingTag = '';
	let i = 1;
	while (tag[i] != '>' && tag[i] != ' ' && i < tag.length) {
		closingTag += tag[i];
		i++;
	}
	return `</${closingTag}>`;
}


module.exports = { f };
