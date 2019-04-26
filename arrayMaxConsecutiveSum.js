/*
Given array of integers, find the maximal possible sum of some of its k 
consecutive elements.

Example

For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be 
arrayMaxConsecutiveSum(inputArray, k) = 8. All possible sums of 
2 consecutive elements are:

2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.
Thus, the answer is 8

Input/Output

[execution time limit] 4 seconds (js)
[input] array.integer inputArray Array of positive integers.
Guaranteed constraints:

3 ≤ inputArray.length ≤ 105,

1 ≤ inputArray[i] ≤ 1000.

[input] integer k
An integer (not greater than the length of inputArray).

Guaranteed constraints: 1 ≤ k ≤ inputArray.length.

[output] integer
The maximal possible sum.
*/

/*
//Решение в лоб: последовательно считаем суммы подмассивов.

function f(inputArray, k) {
	//вспомогательная функция подсчета суммы элементов массива
	function sum(subArr) {
		return subArr.reduce( (sum, cur) => sum + cur );
	}
	
	let max = 0;
	
	for (let i = 0; i <= inputArray.length - k; i++) {
		let val = sum(inputArray.slice(i, i+k));
		if (val > max) {
			max = val;
		}
	}
	return max;
	
}
*/


//Dylan Israel принимает за максимальную сумму сумму первых k элементов
//Далее в другой переменной он последовательно вычитает в цикле 
//предыдущий элемент и прибавляет текущий. Преимущество такого подхода
//в том, что нам не надо тратить память на дополнительный массив

function f(inpArr, k) {
	let sum = 0;
	for (let i = 0; i < k; i++) {
		sum += inpArr[i];
	}
	let max = sum;
	for (let i = k; i < inpArr.length; i++) {
		sum -= inpArr[i-k];
		sum += inpArr[i];
		if (sum > max) {
			max = sum;
		}
	}
	return max;
	
}

//сравним время работы алгоритмов
console.log(f([2, 3, 5, 1, 6], 2), 15);



module.exports = { f };
