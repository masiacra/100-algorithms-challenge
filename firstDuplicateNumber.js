/*
Given an array a that contains only numbers in the range from 1 to 
a.length, find the first duplicate number for which the second occurrence 
has the minimal index. In other words, if there are more than 1 
duplicated numbers, return the number for which the second occurrence 
has a smaller index than the second occurrence of the other number does. 
If there are no such elements, return -1.

Example

For a = [2, 1, 3, 5, 3, 2], the output should be firstDuplicate(a) = 3.
There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has 
a smaller index than the second occurrence of 2 does, so the answer is 3.

For a = [2, 4, 3, 5, 1], the output should be firstDuplicate(a) = -1.
Hints

hasOwnProperty()
Input/Output

[execution time limit] 5 seconds (ts)

[input] array.integer a

A string containing at least one digit.

Guaranteed constraints:

1 ≤ a.length ≤ 105, 1 ≤ a[i] ≤ a.length.

[output] integer The element in a that occurs in the array more than 
once and has the minimal index for its second occurrence. If there are 
no such elements, return -1.
*/

/*
//Решение в лоб
function f(numbers) {
	let duplicate = {pos: null, val: -1};
	for (let i = 0; i < numbers.length-1; i++) {
		for (let j = i+1; j < numbers.length; j++) {
			if (numbers[i] - numbers[j] === 0) {
				if (duplicate.val === -1 || duplicate.pos > j) {
					duplicate.val = numbers[j];
					duplicate.pos = j;
				}
			}
		}
	}
	return duplicate.val;
}
*/

//Dylan Israel предлагает более изящное решение.
//Создаем объект, в котом отслеживаем дубликаты. В цикле смотрим, есть ли
//соответствующий символ в объекте, если нет, то добавляем его в объект. 
//Если нет, то добавляем его. Если есть, то возвращаем символ.

function f(numbers) {
	const mySet = new Set();
	for (let num of numbers) {
		if (mySet.hasOwnProperty(num)) {
			return num;
		}
		mySet[num] = num;
	}
	return -1;
}


module.exports = { f };
