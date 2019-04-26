/*
Two arrays are called similar if one can be obtained from another by 
swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

Example

For a = [1, 2, 3] and b = [1, 2, 3], the output should be 
areSimilar(a, b) = true.
The arrays are equal, no need to swap any elements.

For a = [1, 2, 3] and b = [2, 1, 3], the output should be 
areSimilar(a, b) = true.
We can obtain b from a by swapping 2 and 1 in b.

For a = [1, 2, 2] and b = [2, 1, 1], the output should be 
areSimilar(a, b) = false.
Any swap of any two elements either in a or in b won't make a and b equal.

Hints

toString()
reverse()
Input/Output

[time limit] 4000ms (js)
[input] array.integer a
Array of integers.

Guaranteed constraints:

3 ≤ a.length ≤ 105,

1 ≤ a[i] ≤ 1000.

[input] array.integer b
Array of integers of the same length as a.

Guaranteed constraints:

b.length = a.length,

1 ≤ b[i] ≤ 1000.

[output] boolean

true if a and b are similar, false otherwise.

*/

/*
//Решение в лоб :
function f(arr1, arr2) {
	let swaped = false;
	for (let i = 0; i < arr1.length - 1; i++) {
		if (arr1[i] !== arr2[i] && !swaped) {
			if (arr1[i] === arr2[i+1] && arr1[i+1] === arr2[i]) {
				[arr2[i], arr2[i+1]] = [arr2[i+1], arr2[i]];
				swaped = true;
			} else {
				return false;
			}
		} else if (arr1[i] !== arr2[i] && swaped) {
			return false
		}
	}
	if (arr1[arr1.length-1] !== arr2[arr2.length-1]) return false;
	return true;
}
*/


//Изящное решение Dylan Israel. Он предлагает преобразовать массивы в
//в строки, и, если они равны, то вернуть true. Далее, используя 2 вспомогательных
//массива ищем несовпадающие элементы. Один из вспомогательных массивов
//реверсируем, и, если длина массивов не равна 2 или массивы, преобразованные
//к строкам не совпадают вернуть false


function f(arr1, arr2) {
	if (arr1.toString() === arr2.toString()) return true;
	let c = [], d = [];
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] != arr2[i]) {
			c.push(arr1[i]);
			d.push(arr2[i]);
		}
	}
	d.reverse();
	if (c.length === 2 && c.toString() === d.toString()) return true;
	return false;
}

module.exports = { f };

