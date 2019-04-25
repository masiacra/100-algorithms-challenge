/*
Given a sequence of integers as an array, determine whether it is 
possible to obtain a strictly increasing sequence by removing no more
than one element from the array.

Example

For sequence = [1, 3, 2, 1], the output should be 
almostIncreasingSequence(sequence) = false;
There is no one element in this array that can be removed in order to 
get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be 
almostIncreasingSequence(sequence) = true.
You can remove 3 from the array to get the strictly increasing
sequence [1, 2]. Alternately, you can remove 2 to get the strictly 
increasing sequence [1, 3].

Hints

Nope
Input/Output

[time limit] 4000ms (js)
[input] array.integer sequence
Guaranteed constraints:

2 ≤ sequence.length ≤ 105,

-105 ≤ sequence[i] ≤ 105.

[output] boolean

Return true if it is possible to remove one element from the 
array in order to get a strictly increasing sequence, otherwise return 
false.
*/


/*
 * Решение в лоб!
//Последовательность является возрастающей, когда каждый ее член больше
//предыдущего

function f(sequence) {
	
	//Вспомогательная функция для проверки, является ли последовательность
	//возрастающей
	function isIncreasing(seq) {
		for (let i = 1; i < seq.length; i++) {
			if (seq[i] < seq[i-1]) return false;
		}
		return true;
	}
	
	//Последовательно выкидываем элементы, начиная с первого, и проверяем,
	// стала ли последовательность возрастающей

	for (let i = 0; i < sequence.length; i++) {
		if (isIncreasing(sequence.slice(0,i).concat(sequence(i+1)))) {
			return true;
		}
	}
	return true;

}
* 
*/

//Последовательность почти возрастает, если количество неправильных 
//членов не больше одного. Подсчитаем количество некорректных элементов.

function f(sequence) {
	let mistakes = 0;
	for (let i = 1; i < sequence.length; i++) {
		if (sequence[i] <= sequence[i+1]) {
			mistakes++;
			if (mistakes >= 2) return false; 
		}
	}
	return mistakes < 2;
}


module.exports = { f };
