/*
Given array of integers, for each position i, search among the previous 
positions for the last (from the left) position that contains a smaller 
value. Store this value at position i in the answer. If no such value 
can be found, store -1 instead.

Example

For items = [3, 5, 2, 4, 5], the output should be 
arrayPreviousLess(items) = [-1, 3, -1, 2, 4].

Hints

unshift()
Input/Output

[execution time limit] 5 seconds (ts)

[input] array.integer items

Non-empty array of positive integers.

Guaranteed constraints:

3 ≤ items.length ≤ 15,

1 ≤ items[i] ≤ 200.

[output] array.integer

Array containing answer values computed as described above.
*/

//Dylan Israel сразу же заявляет, что самое сложное в этой задаче - это
//понять, чего же от тебя хотят. Я, честно говоря, согласен с ним и без 
//его бы разбора не разобрался. Тут не хватает тестовых данных.
//Нам необходимо вернуть массив, для каждой позиции которого, поиск
//среди предыдущих слева позиций даст наименьшее значение.
//Но, если следовать такой логики, то при таком входном массиве,
//ответ будет [-1, 3, -1, 2, 2].
//Dylan Israel приводит следующее решение: у него при найденном слева
//меньшем текущего значения поиск прерывается.

/*
function f(items) {
	let result = [];
	for (let i = items.length - 1; i >= 0; i--) {
		//Здесь цикл от i, чтобы "подхватить" крайнее левое значение
		for (let j = i; j >= 0; j--) {
			if (items[i] > items[j]) {
				result.unshift(items[j]);
				break;
			}
			if (j === 0) {
				result.unshift(-1);
			}
		}
	}
	return result;
}
*/

//Мой вариант 
function f(items) {
	return items.map( (dig, index) => {
		if (dig > items[index-1]) {
			return items[index-1];
		} else {
			let j = index - 1;
			while (j >= 0) {
				if (dig > items[j]) {
					return items[j];
				}
				j--;
			}
		}
		return -1;
	});
}
//Тут используется push вместо unshift, что лучше сказывается на быстродействии.


module.exports = { f };
