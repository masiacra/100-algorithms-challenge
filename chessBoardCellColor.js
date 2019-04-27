/*
Given two cells on the standard chess board, determine whether they have 
the same color or not.

Example

For cell1 = "A1" and cell2 = "C3", the output should be 
chessBoardCellColor(cell1, cell2) = true.

For cell1 = "A1" and cell2 = "H3", the output should be 
chessBoardCellColor(cell1, cell2) = false.


Hints

parseInt()
Input/Output

[time limit] 4000ms (js)
[input] string cell1
[input] string cell2
[output] boolean
true if both cells have the same color, false otherwise.
*/


function f(cell1, cell2) {
	const board = new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4], 
		['e', 5], ['f', 6], ['g', 7], ['h', 8]]);
	
	const c1x = board.get(cell1[0].toLowerCase());
	const c1y = parseInt(cell1[1]);
	const c2x = board.get(cell2[0].toLowerCase());
	const c2y = parseInt(cell2[1]);
	
	const getColor = (x, y) => {
		if (x % 2 == 0 && y % 2 != 0) return 'white';
		if (x % 2 != 0 && y % 2 == 0) return 'white';
		return 'black';
	};
	
	return getColor(c1x, c1y) === getColor(c2x, c2y);
	
}

//Хитрый Dylan Israel придумал хак, согласно которому, если остаток от
//деления суммы координат одной клетки на 2 === остатку от деления на 2
//суммы координат второй клетки, то они имеют одинаковый цвет


module.exports = { f };
