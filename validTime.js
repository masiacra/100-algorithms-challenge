/*
Check if the given string is a correct time representation of the 
24-hour clock.

Example

For time = "13:58", the output should be validTime(time) = true;

For time = "25:51", the output should be validTime(time) = false;

For time = "02:76", the output should be validTime(time) = false.

Hints

parseInt()
split()
Input/Output

[execution time limit] 5 seconds (ts)
[input] string time
A string representing time in HH:MM format. It is guaranteed that the 
first two characters, as well as the last two characters, are digits.

[output] boolean
true if the given representation is correct, false otherwise.
*/

function f(time) {
	time = time.split(':');
	return (parseInt(time[0]) > 0 && parseInt(time[0]) <= 24 )&& 
		(parseInt(time[1]) > 0 && parseInt(time[1]) <= 60);
}

module.exports = { f };
