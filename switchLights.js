/*
N candles are placed in a row, some of them are initially lit. For each 
candle from the 1st to the Nth the following algorithm is applied: if 
the observed candle is lit then states of this candle and all candles 
before it are changed to the opposite. Which candles will remain lit 
after applying the algorithm to all candles in the order they are placed 
in the line?

Example

For a = [1, 1, 1, 1, 1], the output should be switchLights(a) = [0, 1, 0, 1, 0].
For better understanding:
[1, 1, 1, 1, 1] -> [0, 1, 1, 1, 1] -> [1, 0, 1, 1, 1] -> [0, 1, 0, 1, 1] ->
 ^                     ^                     ^                     ^
[1, 0, 1, 0, 1] -> [0, 1, 0, 1, 0].
             ^

For a = [0, 0], the output should be switchLights(a) = [0, 0].
The candles are not initially lit, so their states are not altered by 
the algorithm.

Input/Output

[execution time limit] 5 seconds (ts)
[input] array.integer a
Initial situation - array of zeros and ones of length N, 1 means that 
the corresponding candle is lit.

Guaranteed constraints:

2 ≤ a.length ≤ 5000.

[output] array.integer
Situation after applying the algorithm - array in the same format as 
input with the same length.
*/

function f(candles) {
	for (let i = 0; i < candles.length; i++) {
		if (candles[i] === 1) {
			for (let j = i; j >= 0; j--) {
				if (candles[j] === 1) {
					candles[j] = 0;
				} else {
					candles[j] = 1;
				}
			}
		}
	}
	return candles;
}

module.exports = { f };
