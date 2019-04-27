/*
Given the positions of a white bishop and a black pawn on the standard 
chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited 
to diagonal movement. Check out the example below to see how it can move:



Example

For bishop = "a1" and pawn = "c3", the output should be 
bishopAndPawn(bishop, pawn) = true.


Hint

parseInt()
Input/Output

[time limit] 4000ms (js)
[input] string bishop
Coordinates of the white bishop in the chess notation.

[input] string pawn
Coordinates of the black pawn in the same notation.

[output] boolean
true if the bishop can capture the pawn, false otherwise.
*/

//Заменим координаты в виде букв, на координаты на плоскости.
//Т.е. вместо a,b,c,d,e,f,g,h будем использовать цифры 1-8.
//На надо лишь "передвинуть" слона на координату пешки или соседнюю 
// в зависимости от его начального положения.

function f(bishop, pawn) {
	let coords = new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4],
		['e', 5], ['f', 6], ['g', 7], ['h', 8]]);
	let b = {
		x: coords.get(bishop[0]),
		y: parseInt(bishop[1])
	};
	let p = {
		x: coords.get(pawn[0]),
		y: parseInt(pawn[1])
	};
	
	const limitX = p.x, limitY = p.y;
	
	const dx = b.x < p.x ? 1 : -1;
	const dy = b.y < p.y ? 1 : -1;
	
	while (b.x !== limitX) {
		b.x += dx;
		b.y += dy;
	}
	
	return JSON.stringify(b) === JSON.stringify(p);
}
//Изнчально я проверядл b.x !== limitX && b.y != limitY
//Мы всегда будем достигать координаты по горизонтали раньше, чем по 
//вертикали. А так как слон не бьет по горизонтали, то на этом можно и 
//остановиться

//Dylan Israel предлагает вот такое изящное решение:
//if (b.x + b.y === p.x + p.y || b.x + p.y === b.y + p.x) return true;
//Он говорит, что тут надо хорошо представлять себе особенности шахматной
//доски.


module.exports = { f };
