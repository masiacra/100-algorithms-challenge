/*
Some people are standing in a row in a park. There are trees between 
them which cannot be moved. Your task is to rearrange the people by 
their heights in a non-descending order without moving the trees.

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be 
sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

Hinits

filter()
sort()
Input/Output

[time limit] 4000ms (js)
[input] array.integer a
If a[i] = -1, then the ith position is occupied by a tree. Otherwise 
a[i] is the height of a person standing in the ith position.

Guaranteed constraints:

5 ≤ a.length ≤ 15,

-1 ≤ a[i] ≤ 200.

[output] array.integer

Sorted array a with all the trees untouched.
*/

/*
function f(heights) {
	let manHeights = [];
	let positionsOfTrees = [];
	heights.forEach( (height, index) => {
		if (height === -1) {
			positionsOfTrees.push(index);
		} else {
			manHeights.push(height);
		}
	});
	manHeights.sort( (a,b) => a-b);
	for (let position of positionsOfTrees) {
		manHeights.splice(position, 0, -1);
	}
	return manHeights;
}
*/

//Dylan Israel вместо того, чтобы помечать позиции деревьев, просто
//в исходном массиве заменяет позиции недеревьев.

function f(heights) {
	const manHeights = heights.filter( (height) => {
		if (height != -1) return height;
	});
	manHeights.sort( (a,b) => a-b);
	let index = 0;
	for (let i = 0; i < heights.length; i++) {
		if (heights[i] !== -1) {
			heights[i] = manHeights[index];
			index++;
		}
	}
	return heights;
}

module.exports = { f };
