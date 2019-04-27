/*
Given a sorted integer array that does not contain any duplicates, 
return a summary of the number ranges it contains.

Example

For nums = [-1, 0, 1, 2, 6, 7, 9], the output should be 
composeRanges(nums) = ["-1->2", "6->7", "9"].
Hints

push()
Input/Output

[execution time limit] 5 seconds (ts)

[input] array.integer nums A sorted array of unique integers.

Guaranteed constraints:

0 ≤ nums.length ≤ 15, (231 - 1) ≤ nums[i] ≤ 231 - 1.

[output] array.string
*/

function f(nums) {
	if (nums.length === 0) return [];
	if (nums.length === 1) return [nums[0] + ''];
	let result = [];
	let first = nums[0];
	let last = null;;
	for (let i = 1; i <= nums.length; i++) {
		if (nums[i] != nums[i-1] + 1) {
			if (last) {
				result.push(first + '->' + last);
			} else {
				result.push(first);
			}
			first = nums[i];
			last = null;
		} else {
			last = nums[i];
		}
	}
	return result;
}

//Dylan Israel в этой задаче сначала заполняет массив объектами со свойствами
// start и end, а затем в цикле заменяет объекты на строки.

module.exports = { f };
