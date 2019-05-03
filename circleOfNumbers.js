/*
Consider integer numbers from 0 to n - 1 written down along the circle 
in such a way that the distance between any two neighbouring numbers is 
equal (note that 0 and n - 1 are neighbouring, too).

Given n and firstNumber, find the number which is written in the 
radially opposite position to firstNumber.

Example

For n = 10 and firstNumber = 2, the output should be 
circleOfNumbers(n, firstNumber) = 7.



Hints

push()
Input/Output

[time limit] 4000ms (js)
[input] integer n
A positive even integer.

Guaranteed constraints:

4 ≤ n ≤ 20.

[input] integer firstNumber
Guaranteed constraints:

0 ≤ firstNumber ≤ n - 1.

[output] integer
*/

/*
function f(n, firstNumber) {
	
	//Круг делится на n частей. Угол между двумя соседними чистями:
	let alpha = 360 / n;
	//принимаем позицию firstNumber 0 градусов.
	let current = 0;
	while (current < 180) {
		firstNumber++;
		if (firstNumber === n) {
			firstNumber = 0;
		}
		current += alpha;
	}
	return firstNumber;

}
*/

//Dylan Israel предлагает следующее решение
function f(n, firstNumber) {
	const numArray = [];
	const halfWay = n / 2;
	for (let i = 0; i < n; i++) {
		numArray.push(i);
	}
	if (firstNumber < halfWay) {
		return numArray[firstNumber + halfWay];
	}
	return numArray[firstNumber - halfWay];
}

module.exports = { f };
