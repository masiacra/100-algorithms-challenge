/*
Flatten a nested array. You must account for varying levels of nesting.

Example

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].

steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4]

Hints

isArray()
push()
*/


function f(arr) {
	let result = [];
	
	function aux(arr) {
		for (let elem of arr) {
			if (Array.isArray(elem)) {
				aux(elem);
			} else {
				result.push(elem);
			}
		}
		return result;
	}
	
	return aux(arr);
}


module.exports = { f };
