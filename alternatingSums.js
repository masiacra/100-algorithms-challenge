/*
Several people are standing in a row and need to be divided into two 
teams. The first person goes into team 1, the second goes into team 2,
the third goes into team 1 again, the fourth into team 2, and so on.

You are given an array of positive integers - the weights of the people. 
Return an array of two integers, where the first element is the total 
weight of team 1, and the second element is the total weight of team 2 
after the division is complete.

Example

For a = [50, 60, 60, 45, 70], the output should be 
alternatingSums(a) = [180, 105].

Input/Output

[time limit] 4000ms (js)
[input] array.integer a
Guaranteed constraints:

1 ≤ a.length ≤ 10,

45 ≤ a[i] ≤ 100.

[output] array.integer
*/


function f(a) {
	let result = [0, 0];
	a.forEach( (weight, index) => {
		if (index % 2 === 0) {
			result[0] += weight;
		} else {
			result[1] += weight;
		}
	});
	return result;
}

module.exports = { f };
