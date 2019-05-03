/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only 
two divisors, one and itself. For example, 2 is a prime number because 
it's only divisible by one and two.

The provided number may not be a prime.

Example

sumAllPrimes(10) should return 17
sumAllPrimes(977) should return 73156
Hints

push()
reduce()
*/

/*
function f(n) {
	let sum = 2;
	const primes = [2];
	
	for (let i = 3; i <= n; i++) {
		if (isPrime(i)) {
			primes.push(i);
			sum += i;
		} 
	}
	return sum;
	
	function isPrime(num) {
		const limit = Math.floor(Math.sqrt(num));
		for (let i = 0; i <= primes.length; i++) {
			if (num % primes[i] === 0) return false;
		}
		return true;
	}
}
*/

//Dylan Israel предлагает следующее решение

function f(num) {
	let totalPrimes = 0;
	//У Dyalana здес ошибка. Он делает цикл до i < num
	for (let i = 2; i <= num; i++) {
		for (let j = 2; j <= i; j++) {
			//На это шаге понимаем, что число простое
			if (i === j) totalPrimes += i;
			//Обрываем внутренний цикл, если число не простое
			if (i % j === 0) break;
		}
	}
	return totalPrimes;
}


module.exports = { f };
