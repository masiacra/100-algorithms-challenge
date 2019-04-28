const assert = require('assert');

const exc1 = require('./absoluteValuesSumMinimization.js');


it('Для массива [2, 4, 7] absoluteValuesSumMinimization должна вернуть 4', 
	() => {
   assert.equal(exc1.absoluteValuesSumMinimization([2, 4, 7]), 4);
});
it('Для массива [2, 4, 6, 7] absoluteValuesSumMinimization должна вернуть 4', 
	() => {
  assert.equal(exc1.absoluteValuesSumMinimization([2, 4, 6, 7]), 4);
});
it('Для массива [[2, 4, 6, 6, 7] absoluteValuesSumMinimization должна вернуть 6', 
	() => {
  assert.equal(exc1.absoluteValuesSumMinimization([2, 4, 6, 6, 7]), 6);
});
it('Для массива [2, 4, 6, 6, 7, 8] absoluteValuesSumMinimization должна вернуть 6', 
	() => {
  assert.equal(exc1.absoluteValuesSumMinimization([2, 4, 6, 6, 7, 8]), 6);
});
  


const exc2 = require('./add');


it('Для чисел 1 и 2 add должна вернуть 3', () => {
	assert.equal(exc2.add(1, 2), 3);
});
	
it('Для чисел 1, 2, 6, 8, 10 add должна вернуть', () => {
	assert.equal(exc2.add(1, 2, 6, 8, 10), 27);
});
	


const exc3 = require('./addBorder');

it('Для ["abc","ded"] deepEqual должна вернуть ["*****","*abc*","*ded*","*****"]', 
	() => {
	assert.deepEqual(exc3.addBorder(["abc","ded"]), ["*****","*abc*","*ded*","*****"]);
});
	


const exc4 = require('./addTwoDigits');

it('Для 29 addTwoDigits должна вернуть 11', () => {
	assert.equal(exc4.addTwoDigits(29), 11);
});
	
it('Для 34 addTwoDigits должна вернуть 7', () => {
	assert.equal(exc4.addTwoDigits(34), 7);
});
	
it('Для 99 addTwoDigits должна вернуть 18', () => {
	assert.equal(exc4.addTwoDigits(99), 18);
});
	



const exc5 = require('./adjacentElementsProduct');

it('Проверяем решение задачи adjacentElementsProduct',  () => {
	it('Для массива [3, 6, -2, -5, 7, 3] ответ 21', () => {
		assert.equal(exc5.adjacentElementsProduct([3, 6, -2, -5, 7, 3]), 
			21);
	});
	
	it('Для массива [1, 2, 3, 5] ответ 15', () => {
		assert.equal(exc5.adjacentElementsProduct([1, 2, 3, 5]), 
			15);
	});
	
	it('Для массива [3, -7, -8, 10] ответ 56', () => {
		assert.equal(exc5.adjacentElementsProduct([3, -7, -8, 10]), 
			56);
	});
});



const exc6 = require('./allLongestStrings');


it('Для массива ["aba", "aa", "ad", "vcd", "aba"] allLongestStrings' +
	' должна вернуть массив ["aba", "vcd", "aba"]', () => {
	assert.deepEqual(exc6.allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]),
	["aba", "vcd", "aba"]);
});
	
it('Для массива ["a", "b", "c"] allLongestStrings должна вернуть ["a", "b", "c"]', () => {
	assert.deepEqual(exc6.allLongestStrings(["a", "b", "c"]), 
	["a", "b", "c"]);
});
	



const exc7 = require('./almostIncreasingSequence');


it('Для последовательности [1, 3, 2, 1] almostIncreasingSequence должна' +
 ' вернуть false', () => {
	assert.equal(exc7.f([1, 3, 2, 1]), false);
});
it('Для последовательности [1, 3, 2] almostIncreasingSequence должна' + 
	' вернуть true', () => {
	assert.equal(exc7.f([1, 3, 2]), true);
});
	
it('Для последовательност [5, 1, 2, 3] almostIncreasingSequence должна' +
	' вернуть true', () => {
	assert.equal(exc7.f([5, 1, 2, 3]), true);
});

it('Для последовательност [5, 0, 2, 3] almostIncreasingSequence должна' +
	' вернуть true', () => {
	assert.equal(exc7.f([5, 0, 2, 3]), true);
});

it('Для последовательност [3, 7, 8, 1] almostIncreasingSequence должна ' +
	' вернуть true', () => {
	assert.equal(exc7.f([3, 7, 8, 1]), true);
});
	
it('Для последовательност [3, 2, 8, 1] almostIncreasingSequence должна' +
	' вернуть ответ false', () => {
	assert.equal(exc7.f([3, 2, 8, 1]), false);
});
it('Для последовательност [1,3,1,2] almostIncreasingSequence должна' +
	' вернуть ответ false', () => {
	assert.equal(exc7.f([1,3,1,2]), false);
});	
it('Для последовательност [1,3,1,1] almostIncreasingSequence должна' +
	' вернуть ответ false', () => {
	assert.equal(exc7.f([1,3,1,1]), false);
});	

const exc8 = require('./alphabetSubSequence');


it('Для "effg" alphabetSubSequence должна вернуть ответ false', () => {
	assert.equal(exc8.f("effg"), false);
}); 
it('Для "cdce" alphabetSubSequence должна вернуть ответ false', () => {
	assert.equal(exc8.f("cdce"), false);
}); 
it('Для "ace" alphabetSubSequence должна вернуть ответ true', () => {
	assert.equal(exc8.f("ace"), true);
}); 
it('Для "bxz" alphabetSubSequence должна вернуть ответ true', () => {
	assert.equal(exc8.f("bxz"), true);
}); 	
it('Для "zab" alphabetSubSequence должна вернуть ответ false', () => {
	assert.equal(exc8.f("zab"), false);
}); 



const exc9 = require('./alphabeticShift');

it('Для строки "crazy" alphabeticShift должна вернуть ответ "dsbaz"', () => {
	assert.equal(exc9.f("crazy"), "dsbaz");
});
	



const exc10 = require('./alternatingSums');

it('Для массива [50, 60, 60, 45, 70] alternatingSums должна вернуть' +  
	' ответ [180, 105]', () => {
	assert.deepEqual(exc10.f([50, 60, 60, 45, 70]), [180, 105]);
});



const exc11 = require('./areEquallyStrong');

it('Для входных параметров 10, 15, 10, 15 areEquallyStrong должна ' +
	'вернуть ответ true', () => {
	assert.equal(exc11.f(10, 15, 10, 15), true);
});
it('Для входных параметров 15, 10, 10, 15 areEquallyStrong должна '	+
	' вернуть ответ true', () => {
	assert.equal(exc11.f(15, 10, 10, 15), true);
});
it('Для входных параметров 15, 9, 15, 10  areEquallyStrong должна ' +
	' вернуть ответ false', () => {
	assert.equal(exc11.f(15, 9, 15, 10), false);
});
it('Для входных параметров 15, 9, 10, 14  areEquallyStrong должна ' +
	'вернуть ответ false', () => {
	assert.equal(exc11.f(15, 9, 10, 14), false);
});


const exc12 = require('./areSimilar');


it('Для массивов [1, 2, 3] и [1, 2, 3] areSimilar должна вернуть true', () => {
	assert.equal(exc12.f([1, 2, 3], [1, 2, 3]), true);
});
	
it('Для массивов [1, 2, 3] и [2, 1, 3] areSimilar должна вернуть true', () => {
	assert.equal(exc12.f([1, 2, 3], [2, 1, 3]), true);
});
	
it('Для массивов [1, 2, 2] и [2, 1, 1] areSimilar должна вернуть false', () => {
	assert.equal(exc12.f([1, 2, 2], [2, 1, 1]), false);
});
	
it('Для массивов [1, 1, 1, 3] и [1, 1, 1, 2] areSimilar должна вернуть false', () => {
	assert.equal(exc12.f([1, 1, 1, 3], [1, 1, 1, 2]), false);
});


const exc13 = require('./arrayChange');

it('Для массива [1,1,1] arrayChange должна вернуть ответ 3', () => {
	assert.equal(exc13.f([1,1,1]), 3);
});
	
it('Для массива [9, 6, 5, 1] arrayChange должна вернуть ответ 32', () => {
	assert.equal(exc13.f([9,6,5,1]), 21);
});
it('Для массива [9,10,13,9] arrayChange должна вернуть ответ 5', () => {
	assert.equal(exc13.f([9,10,13,9]), 5);
});



const exc14 = require('./arrayConversion');

it('Для массива [1, 2, 3, 4, 5, 6, 7, 8] arrayConversion должна вернуть' +
	' ответ 186', () => {
	assert.equal(exc14.f([1, 2, 3, 4, 5, 6, 7, 8]), 186);
});


const exc15 = require('./arrayMaxConsecutiveSum');

it('Для массива [2, 3, 5, 1, 6] и k = 2 arrayMaxConsecutiveSum ' +
	' должгна вернуть ответ 8', () => {
	assert.equal(exc15.f([2, 3, 5, 1, 6], 2), 8);
});
it('Для массива [2, 3, 5, 1, 6] и k = 3 arrayMaxConsecutiveSum вернуть' +
	' ответ 12', () => {
	assert.equal(exc15.f([2, 3, 5, 1, 6], 3), 12);
});	 
it('Для массива [2, 3, 5, 1, 6] и k = 4 arrayMaxConsecutiveSum вернуть' + 
	' ответ 15', () => {
	assert.equal(exc15.f([2, 3, 5, 1, 6], 4), 15);
});
it('Для массива [2, 3, 5, 1, 6] и k = 5 arrayMaxConsecutiveSum вернуть' +
	' ответ 17', () => {
	assert.equal(exc15.f([2, 3, 5, 1, 6], 5), 17);
});


const exc16 = require('./arrayPreviousLess');

it('Для массива [3, 5, 2, 4, 5] arrayPreviousLess должна выдавать ' +
	'[-1, 3, -1, 2, 4]', () => {
	
	assert.deepEqual(exc16.f([3, 5, 2, 4, 5]), [-1, 3, -1, 2, 4]);
	
});

it('Для массива [3,5,2,6,5] arrayPreviousLess должна выдавать ' +
	'[-1, 3, -1, 2, 2]', () => {

	assert.deepEqual(exc16.f([3,5,2,6,5]), [-1, 3, -1, 2, 2]);
});


const exc17 = require('./arrayReplace');

it('Для входных параметров [1, 2, 1], 1, 3 arrayReplace должен ' +
	'[3, 2, 3]', () => {
	assert.deepEqual(exc17.f([1, 2, 1], 1, 3), [3, 2, 3]);
});

const exc18 = require('./avoidObstacles');

it('Для задачи avoidObstacles при входном массиве [5, 3, 6, 7, 9] ответ 4',
	() => {
	
	assert.equal(exc18.f([5, 3, 6, 7, 9]), 4);
		
});


const exc19 = require('./bishopAndPawn');

it('Для задачи bishopAndPawn при входных данных "a1" и "c3" ответ true',
	() => {
		assert.equal(exc19.f('a1', 'c3'), true);
});
it('Для задачи bishopAndPawn при входных данных "d4" и "c3" ответ true',
	() => {
		assert.equal(exc19.f('d4', 'c3'), true);
});	


it('Для задачи bishopAndPawn при входных данных "c4" и "f5" ответ false',
	() => {
		assert.equal(exc19.f('c4', 'f5'), false);
});

it('Для задачи bishopAndPawn при входных данных "b7" и "a8" ответ true',
	() => {
		assert.equal(exc19.f('b7', 'a8'), true);
});

it('Для задачи bishopAndPawn при входных данных "b7" и "f6" ответ false',
	() => {
		assert.equal(exc19.f('b7', 'f6'), false);
});

const exc20 = require('./candies');

it('Для задачи candies при m = 10 и n = 3 ответ должен быть 3', () => {
	assert.equal(exc20.f(10, 3), 3);
});


const exc21 = require('./caseInsensitivePalindrome');

it('Для задачи caseInsensitivePalindrome для строки AaBaa ответ true', () => {
	assert.equal(exc21.f('AaBaa'), true);
});
it('Для задачи caseInsensitivePalindrome для строки madaM ответ true', () => {
	assert.equal(exc21.f('madaM'), true);
});
it('Для задачи caseInsensitivePalindrome для строки abac ответ false', () => {
	assert.equal(exc21.f('abac'), false);
});

const exc22 = require('./centuryFromYear');

it('Для задачи centuryFromYear для year = 1905 ответ 20', () => {
	assert.equal(exc22.f(1905), 20);
});

it('Для задачи centuryFromYear для year = 1905 ответ 20', () => {
	assert.equal(exc22.f(2001), 21);
});

it('Для задачи centuryFromYear для year = 1905 ответ 20', () => {
	assert.equal(exc22.f(1700), 17);
});


const exc23 = require('./characterParity');

it('Для задачи characterParity для symb = "5" ответ должен быть odd', 
	() => {
		assert.equal(exc23.f('5'), 'odd');
});


it('Для задачи characterParity для symb = "8" ответ должен быть odd', 
	() => {
		assert.equal(exc23.f('8'), 'even');
});

it('Для задачи characterParity для symb = "q" ответ должен быть odd', 
	() => {
		assert.equal(exc23.f('q'), 'not a digit');
});



const exc24 = require('./checkPalindrome');
 
it('Для задачи checkPalindrome при входной строке "aabaa" ответ true', 
	() => {
	assert.equal(exc24.f("aabaa"), true);	
});

it('Для задачи checkPalindrome при входной строке "abac" ответ true', 
	() => {
	assert.equal(exc24.f("abac"), false);	
});

it('Для задачи checkPalindrome при входной строке "a" ответ true', 
	() => {
	assert.equal(exc24.f("a"), true);	
});



const exc25 = require('./chessBoardCellColor');

it('Для задачи chessBoardCellColor при входных параметрах "A1", "C3"' +
	' ответ true', () => {
	assert.equal(exc25.f('A1', 'C3'), true);
});

it('Для задачи chessBoardCellColor при входных параметрах "A1", "H3"' +
	' ответ false', () => {
	assert.equal(exc25.f('A1', 'H3'), false);
});

it('Для задачи chessBoardCellColor при входных параметрах "A1", "E3"' +
	' ответ true', () => {
	assert.equal(exc25.f('A1', 'E7'), true);
});


const exc26 = require('./chunkyMonkey');

it('Для задачи chunkyMonkey при входных параметрах '+
	'["a", "b", "c", "d"] и 2 ответ [["a", "b"], ["c", "d"]]', () => {
	
	assert.deepEqual(exc26.f(["a", "b", "c", "d"], 2), 
		[["a", "b"], ["c", "d"]]);
		
});
it('Для задачи chunkyMonkey при входных параметрах '+
	'[0, 1, 2, 3, 4, 5] и 4 ответ [[0, 1, 2, 3], [4, 5]]', () => {
	
	assert.deepEqual(exc26.f([0, 1, 2, 3, 4, 5], 4), 
		[[0, 1, 2, 3], [4, 5]]);
		
});

const exc27 = require('./commonCharacterCount');

it('Для задачи commonCharacterCount при входных строках "aabcc" и "adcaa"' +
	' ответ должен быть 3', () => {
	assert.equal(exc27.f("aabcc", "adcaa"), 3);
});
it('Для задачи commonCharacterCount при входных строках "zxy" и "abedzy"' +
	' ответ должен быть 2', () => {
	assert.equal(exc27.f("zxy", "abedzy"), 2);
});


const exc28 = require('./companyBotStrategy');

it('Для задачи companyBotStrategy для входного массива ' +
	'[[3, 1], [6, 1], [4, 1], [5, 1]] ответ 4.5', () => {
	exc28.f([[3, 1], [6, 1], [4, 1], [5, 1]], 4.5);
});

it('Для задачи companyBotStrategy для входного массива ' +
	'[[4, 1], [4, -1], [0, 0], [6, 1]] ответ 5.0', () => {
	exc28.f([[4, 1], [4, -1], [0, 0], [6, 1]], 5.0);
});

it('Для задачи companyBotStrategy для входного массива ' +
	'[[4, -1], [0, 0], [5, -1]] ответ 0.0', () => {
	exc28.f([[4, -1], [0, 0], [5, -1]], 0.0);
});

const exc29 = require('./compareIntegers');

it('Для задачи compareIntegers для a = "12" и b = "13"' + 
	' ответ должен быть "less"', () => {
	assert.equal(exc29.f('12', '13'), 'less');
});
it('Для задачи compareIntegers для a = "875" и b = "799"' + 
	' ответ должен быть "greater"', () => {
	assert.equal(exc29.f('875', '799'), 'greater');
});
it('Для задачи compareIntegers для a = "1000" и b = "1000"' + 
	' ответ должен быть "greater"', () => {
	assert.equal(exc29.f('1000', '1000'), 'equal');
});


const exc30 = require('./composeRanges');

it('Для задачи composeRanges для входного массива [-1, 0, 1, 2, 6, 7, 9]' +
	' ответ должен быть ["-1->2", "6->7", "9"]', () => {
	
	assert.deepEqual(exc30.f([-1, 0, 1, 2, 6, 7, 9]), ["-1->2", "6->7", "9"]);
	
});

it('Для задачи composeRanges для входного массива [1, 2, 3, 4, 5]' +
	' ответ должен быть ["1->5"]', () => {
	
	assert.deepEqual(exc30.f([1, 2, 3, 4, 5]), ["1->5"]);
	
});

it('Для задачи composeRanges для входного массива [1, 3, 5, 7, 9]' +
	' ответ должен быть ["1", "3", "5", "7", "9"]', () => {
	
	assert.deepEqual(exc30.f([1, 3, 5, 7, 9]), ["1", "3", "5", "7", "9"]);
	
});


const exc31 = require('./confirmEnding');

it('Для задачи confirmEnding для входных аргументов "Abstraction" ' +
	' и "action" ответ true', () => {
	
	assert.equal(exc31.f("Abstraction", "action"), true);
	
});
it('Для задачи confirmEnding для входных аргументов "Open sesame" ' +
	' и "pen" ответ false', () => {
	
	assert.equal(exc31.f("Open sesame", "pen"), false);
	
});
