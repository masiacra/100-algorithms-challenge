/*
 * 1. Напишите функцию, возвращающую сумму двух чисел.
 * 2. Напишите функцию, возвращающую сумму всех чисел, независимо от 
 * количества параметро.
 * Например, для param1 = 1 и param2 = 2, ответ должен быть 3.
 * Подсказки:
 * 1)Arithmetic Operators
 * 2) Rest Operator
 * 3) forEach()
 * Вход/Выход
 * integer param1
 * Guaranteed constraints:
	-100 ≤ param1 ≤ 1000.
	[input] integer param2
	Guaranteed constraints: -100 ≤ param2 ≤ 1000.
	[output] integer
	The sum of the two inputs.
*/

function add(...args) {
	let sum = 0;
	args.forEach( dig => sum += dig );
	return sum;
}


module.exports = { add };
