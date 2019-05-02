/*
Thumbtack helps Professionals (Pros) grow their business by identifying 
new customers. Upon registering on Thumbtack, a Pro specifies which 
categories of services they provide. To help match customer requests 
with qualified Pros, Thumbtack maintains a list of Pros grouped by 
service categories.

Given a list of pros and their category preferences, return the list of 
Pros for each category.

Example

For pros = ["Jack", "Leon", "Maria"] and

preferences = [["Computer repair", "Handyman", "House cleaning"], 
["Computer lessons", "Computer repair", "Data recovery service"], 
["Computer lessons", "House cleaning"]]

           the output should be
proCategorization(pros, preferences) = [[["Computer lessons"], 
["Leon", "Maria"]], [["Computer repair"], ["Jack", "Leon"]], 
[["Data recovery service"], ["Leon"]], [["Handyman"], ["Jack"]], 
[["House cleaning"], ["Jack", "Maria"]]]

Hints

hasOwnProperty()
push()
toLowerCase()
sort()
Input/Output

[execution time limit] 5 seconds (ts)
[input] array.string pros
A sorted non-empty array of unique strings consisting of English letters.

Here and below we assume that strings are sorted lexicographically.

Guaranteed constraints:

1 ≤ pros.length ≤ 5, 3 ≤ pros[i].length ≤ 10.

[input] array.array.string preferences
Array of the same length as pros. For each valid i preferences[i] is a 
sorted array of unique elements, representing the categories the ith Pro
provides services in.

Guaranteed constraints:

1 ≤ preferences.length ≤ 5, 1 ≤ preferences[i].length ≤ 10, 
3 ≤ preferences[i][j].length ≤ 25.

[output] array.array.array.string Array of category descriptions sorted 
by category names. Each category should be listed in the following 
format: [[], [, ...]] where is a category name, and is a Pro that 
provides services in it.
Each category present in preferences should be returned (in the right 
order), and Pros in each subarray should be sorted.
*/

function f(pros, preferences) {
	const result = [];
	const dict = new Map();
	pros.forEach( (pro, index) => {
		for (let i = 0; i < preferences[index].length; i++) {
			if (!dict.has(preferences[index][i])) {
				dict.set(preferences[index][i], [pro]);
			} else {
				let arr = dict.get(preferences[index][i]);
				arr.push(pro);
				dict.set(preferences[index][i], arr);
			}
		}
	});
	for (let [key, val] of dict) {
		result.push([[key], val]);
	}
	result.sort((arr1, arr2) => {
		if (arr1[0][0].toLowerCase() > arr2[0][0].toLowerCase()) {
			return 1;
		} else {
			return -1;
		}
	});
	return result;
}

module.exports = { f };
