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

const exc32 = require('./containsCloseNums');

it('Для задачи containsCloseNums для входных аргументов' + 
	' [0, 1, 2, 3, 5, 2] и 3 ответ true', () => {
	assert.equal(exc32.f([0, 1, 2, 3, 5, 2], 3), true);
});
it('Для задачи containsCloseNums для входных аргументов' +
	' [0, 1, 2, 3, 5, 2] и 2 ответ false', () => {
	assert.equal(exc32.f([0, 1, 2, 3, 5, 2], 2), false);
});

it('Для задачи containsCloseNums для входных аргументов' +
	' [0, 1, 2, 3, 5, 5] и 1 ответ true', () => {
	assert.equal(exc32.f([0, 1, 2, 3, 5, 5], 1), true);
});


const exc33 = require('./containsDuplicates');

it('Для задачи containsDuplicates для входного массива [1, 2, 3, 1]' + 
	' должен выдавать true', () => {
		
	assert.equal(exc33.f([1, 2, 3, 1]), true);	
			
});
it('Для задачи containsDuplicates для входного массива [1, 3]' + 
	' должен выдавать true', () => {
		
	assert.equal(exc33.f([1, 3]), false);	
			
});


const exc34 = require('./convertCelsiusToFahrenheit');

it('Для задачи convertCelsiusToFahrenheit при входном аргументе -30' +
	' ответ должен быть -22', () => {
		assert.equal(exc34.f(-30), -22);
});
it('Для задачи convertCelsiusToFahrenheit при входном аргументе -10' +
	' ответ должен быть 14', () => {
		assert.equal(exc34.f(-10), 14);
});
it('Для задачи convertCelsiusToFahrenheit при входном аргументе 0' +
	' ответ должен быть 32', () => {
		assert.equal(exc34.f(0), 32);
});

const exc35 = require('./convertString');

it('Для задачи convertString при входных строках "ceoydefthf5iyg5h5yts"' +
	' и "codefights" ответ true', () => {
		
	assert.equal(exc35.f("ceoydefthf5iyg5h5yts", "codefights"), true);

});
it('Для задачи convertString при входных строках "addbyca" и' +
	' "abcd" ответ false', () => {
		
	assert.equal(exc35.f("addbyca", "abcd"), false);

});

const exc36 = require('./depositProfit');

it('Для задачи depositProfit при входных данных 100, 20 и 170 ' +
	' ответ будет 3', () => {
	
	assert.equal(exc36.f(100, 20, 170), 3);

});


const exc37 = require('./differentSymbolsNaive');
it('Для задачи differentSymbolsNaive при входной строке "cabca" ' +
	'ответ будет 3', () => {
		
	assert.equal(exc37.f("cabca"), 3);
		
});

const exc38 = require('./digitDegree');

it('Для задачи digitDegree при n = 5 ответ должен быть 0', () => {
	assert.equal(exc38.f(5), 0);
});
it('Для задачи digitDegree при n = 100 ответ должен быть 1', () => {
	assert.equal(exc38.f(100), 1);
});
it('Для задачи digitDegree при n = 91 ответ должен быть 2', () => {
	assert.equal(exc38.f(91), 2);
});


const exc39 = require('./domainType');

it('Для задачи domainType при входном массиве ["en.wiki.org", ' +
	' "codefights.com", "happy.net", "code.info"] ответ будет ' +
	'["organization", "commercial", "network", "information"]', () => {
		assert.deepEqual(exc39.f(["en.wiki.org","codefights.com", "happy.net", "code.info"]),
			["organization", "commercial", "network", "information"]);
});


const exc40 = require('./encloseInBrackets');

it('Для задачи encloseInBrackets при входной строке "acab" результат ' +
	'должен быть "(acab)"', () => {
	
	assert.equal(exc40.f('acab'), '(acab)');
	
});


const exc41 = require('./evenDigitsOnly');

it('Для задачи evenDigitsOnly при входном числе 248622 ответ должен ' +
	'быть true', () => {
		
	assert.equal(exc41.f(248622), true);	
		
});

it('Для задачи evenDigitsOnly при входном числе 642386 ответ должен ' +
	'быть false', () => {
		
	assert.equal(exc41.f(642386), false);	
		
});

const exc42 = require('./extractEachKth');

it('Для задачи extractEachKth при входном массиве ' +
	'[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] и числе k = 3 ответ ' +
	'[1, 2, 4, 5, 7, 8, 10]', () => {
	
	assert.deepEqual(exc42.f([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3), 
		[1, 2, 4, 5, 7, 8, 10]);
		
});


const exc43 = require('./extractMatrixColumn');

it('Для задачи extractMatrixColumn при входных данных ' +
	'[[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]] и column = 2 ' 	+
	'ответ должен быть [1, 0, 3]', () => {
		
	assert.deepEqual(exc43.f([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2),
		[1, 0, 3]);
		
});

const exc44 = require('./factorializeANumber');

it('Для задачи factorializeANumber для числа 5 ответ 120', () => {
	assert.equal(exc44.f(5), 120);
});
it('Для задачи factorializeANumber для числа 10 ответ 3628800', () => {
	assert.equal(exc44.f(10), 3628800);
});

const exc45 = require('./fancyRide');

it('Для задачи fancyRide для входных данных l = 30 и ' + 
	'fares = [0.3, 0.5, 0.7, 1, 1.3] ответ "UberXL"', () => {
	
	assert.equal(exc45.f(30, [0.3, 0.5, 0.7, 1, 1.3]), "UberXL");
		
});


const exc46 = require('./fareEstimator');

it('Для задачи fareEstimator при входных данных ride_time = 30, ' +
	' ride_distance = 7, cost_per_minute = [0.2, 0.35, 0.4, 0.45], ' +
	' cost_per_mile = [1.1, 1.8, 2.3, 3.5] ответ будет ' 	+
	'[13.7, 23.1, 28.1, 38]', () => {
		
	assert.deepEqual(exc46.f(30, 7, [0.2, 0.35, 0.4, 0.45],
		[1.1, 1.8, 2.3, 3.5]), [13.7, 23.1, 28.1, 38]);
		
});

const exc47 = require('./findClosestPair');

it('Для задачи findClosestPair при входных данных [1, 0, 2, 4, 3, 0] и ' +
	' 5 ответ 2', () => {
		
	assert.equal(exc47.f([1, 0, 2, 4, 3, 0], 5), 2);
		
		
});
it('Для задачи findClosestPair при входных данных [2, 3, 7] и ' +
	' 8 ответ -1', () => {
		
	assert.equal(exc47.f([2, 3, 7], 8), -1);
		
		
});
it('Для задачи findClosestPair при входных данных [2, 3, 7] и ' +
	' 10 ответ 1', () => {
		
	assert.equal(exc47.f([2, 3, 7], 10), 1);
		
		
});

const exc48 = require('./findEmailDomain');


it('Для задачи findEmailDomain при входной строке ' +
	'"prettyandsimple@example.com" ответ "example.com"', () => {
	
	assert.equal(exc48.f("prettyandsimple@example.com"), "example.com");
		
});
it('Для задачи findEmailDomain при входной строке ' +
	'"<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org" ответ "example.org"', () => {
	
	assert.equal(exc48.f('<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org'), "example.org");
		
});

const exc49 = require('./firstDigit');

it('Для задачи firstDigit для строки "var_1__Int" ответ 1', () => {
	assert.equal(exc49.f("var_1__Int"), 1);
});
it('Для задачи firstDigit для строки "q2q-q" ответ 1', () => {
	assert.equal(exc49.f("q2q-q"), 2);
});
it('Для задачи firstDigit для строки "0ss" ответ 1', () => {
	assert.equal(exc49.f("0ss"), 0);
});


const exc50 = require('./firstDuplicateNumber');

it('Для задачи firstDuplicateNumber для массива [2, 1, 3, 5, 3, 2] ' +
	'значение 3', () => {
		
	assert.equal(exc50.f([2, 1, 3, 5, 3, 2]), 3);

});
it('Для задачи firstDuplicateNumber для массива [2, 4, 3, 5, 1] ' +
	'значение -1', () => {
		
	assert.equal(exc50.f([2, 4, 3, 5, 1]), -1);

});
[5, 1, 2, 3, 0, 1, 5, 0, 2]
const exc51 = require('./firstNotRepeatingCharacter');

it('Для задачи firstNotRepeatingCharacter при входной строк ' +
	'"abacabad" ответ "c" ', () => {

	assert.equal(exc51.f("abacabad"), "c");
}); 
it('Для задачи firstNotRepeatingCharacter при входной строк ' +
	'"abacabaabacaba" ответ "_" ', () => {

	assert.equal(exc51.f("abacabaabacaba"), "_");
}); 

const exc52 = require('./flattenArray');


it('Для задачи flattenArray для массива [[["a"]], [["b"]]] ответ ' +
	' ["a", "b"]', () => {
	
	assert.deepEqual(exc52.f([[["a"]], [["b"]]]), ['a', 'b']);	
		
});
it('Для задачи flattenArray для массива [1, [2], [3, [[4]]]] ответ ' +
	' [1, 2, 3, 4]', () => {
	
	assert.deepEqual(exc52.f([1, [2], [3, [[4]]]]), [1, 2, 3, 4]);	
		
});

const exc53 = require('./growingPlant');

it('Для задачи growingPlant для входных значений 100, 10, 910 ' +
	'ответ 10', () => {
	
	assert.equal(exc53.f(100,10,910), 10);
		
});


const exc54 = require('./houseNumbersSum');

it('Для задачи houseNumbersSum для входного массива ' +
	'[5, 1, 2, 3, 0, 1, 5, 0, 2] ответ 11', () => {
		
	assert.equal(exc54.f([5, 1, 2, 3, 0, 1, 5, 0, 2]), 11);
		
});

const exc55 = require('./htmlEndTagByStartTag');

it('Для задачи htmlEndTagByStartTag при входном теге ' +
	'"<BUTTON TYPE=\'BUTTON\' DISSABLED>" ответ "</BUTTON>"', () => {
	
	assert.equal(exc55.f("<BUTTON TYPE=\'BUTTON\' DISSABLED>"), "</BUTTON>");
		
});

it('Для задачи htmlEndTagByStartTag при входном теге ' +
	'<i> ответ </i>', () => {
	
	assert.equal(exc55.f("<i>"), "</i>");
		
});


const exc56 = require('./incorrectPAsswordAttempts');

it('Для задачи incorrectPAsswordAttempts для входных аргументов ' +
	'["1111", "4444", "9999", "3333", "8888", "2222", "7777", ' + 
	'"0000", "6666", "7285", "5555", "1111"] и "1111" ответ true', ()=> {
	assert.equal(exc56.f("1111", ["1111", "4444", "9999", "3333", "8888", 
		 "2222","7777", "0000", "6666", "7285", "5555", "1111"]),
		true);	
});

it('Для задачи incorrectPAsswordAttempts для входных аргументов ' +
	'["2222", "4444", "9999", "3333", "8888", "2222", "7777", ' + 
	'"0000", "6666", "7285"] и "1111" ответ false', ()=> {
	assert.equal(exc56.f("1111", ["2222", "4444", "9999", "3333", "8888", 
		"2222", "7777", "0000", "6666", ]),
		false);	
});

const exc57 = require('./incrementalBackups');

it('Для задачи incrementalBackups для входных данных ' 	+
	'lastBackupTime = 461620205 и changes = [[461620203, 1], [461620204, 2],' +
	' [461620205, 6], [461620206, 5], [461620207, 3], [461620207, 5], ' +
	'[461620208, 1]] ответ [1, 3, 5]', () => {
		
	assert.deepEqual(exc57.f(461620205, [[461620203, 1], [461620204, 2],
	 [461620205, 6], [461620206, 5], [461620207, 3], [461620207, 5], 
	[461620208, 1]]), [1,3,5]);
		
});

const exc58 = require('./integerToStringOfWixedWidth');

it('Для задачи integerToStringOfWixedWidth при входных данных ' + 
	'number = 1234 и width = 2 ответ "34"', () => {
	
	assert.equal(exc58.f(1234, 2), '34');
		
});
it('Для задачи integerToStringOfWixedWidth при входных данных ' + 
	'number = 1234 и width = 4 ответ "1234"', () => {
	
	assert.equal(exc58.f(1234, 4), '1234');
		
});
it('Для задачи integerToStringOfWixedWidth при входных данных ' + 
	'number = 1234 и width = 6 ответ "001234"', () => {
	
	assert.equal(exc58.f(1234, 6), '001234');
		
});

const exc59 = require('./isLucky');
it('Для задачи isLucky при входном числе n = 1230 ответ true', () => {
	assert.equal(exc59.f(1230), true);
});
it('Для задачи isLucky при входном числе n = 239017 ответ false', () => {
	assert.equal(exc59.f(239017), false);
});


const exc60 = require('./isTandemRepeat');
it('Для задачи isTandemRepeat при входной строке "tandemtandem" ответ' +
	' true', () => {
		
	assert.equal(exc60.f("tandemtandem"), true);
		
});
it('Для задачи isTandemRepeat при входной строке "qqq" ответ' +
	' false', () => {
		
	assert.equal(exc60.f("qqq"), false);
		
});
it('Для задачи isTandemRepeat при входной строке "qqq" ответ' +
	' true', () => {
		
	assert.equal(exc60.f("qq"), true);
		
});
it('Для задачи isTandemRepeat при входной строке "2w2ww" ответ' +
	' false', () => {
		
	assert.equal(exc60.f("2w2ww"), false);
		
});


const exc61 = require('./largestNumber');

it('Для задачи largestNumber при n = 2 ответ 99', () => {
	assert.equal(exc61.f(2), 99);
});
it('Для задачи largestNumber при n = 9 ответ 999999999', () => {
	assert.equal(exc61.f(9), 999999999);
});


const exc62 = require('./largestOfFour');

it('Для задачи largestOfFour при входной матрице [[4, 5, 1, 3], ' +
	'[13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]] ' +
	'ответ [5, 27, 39, 1001]', () => {
	
	assert.deepEqual(exc62.f([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], 
		[1000, 1001, 857, 1]]),[5, 27, 39, 1001]);
		
});

it('Для задачи largestOfFour при входной матрице [[4, 9, 1, 3], ' +
	'[13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]] ' +
	'ответ [9, 35, 97, 1000000]', () => {
	
	assert.deepEqual(exc62.f([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], 
		[1000000, 1001, 857, 1]]),[9, 35, 97, 1000000]);
		
});


const exc63 = require('./lateRide');
it('Для задачи lateRide при входном времени 240 ответ должен быть 4', () => {
	assert.equal(exc63.f(240), 4);
});
it('Для задачи lateRide при входном времени 240 ответ должен быть 4', () => {
	assert.equal(exc63.f(808), 14);
});

const exc64 = require('./longestDigitsPrefix');

it('Для задачи longestDigitsPrefix при входной строке "123aa1" ' +
	'ответ должен быть "123"', () => {
		
	assert.equal(exc64.f("123aa1"), "123");
		
});


const exc65 = require('./makeArrayConsecutive2');

it('Для задачи makeArrayConsecutive2 при входном массиве [6, 2, 3, 8] ' +
	'ответ должен быть 3', () => {
	assert.equal(exc65.f([6, 2, 3, 8]), 3);
});


const exc66 = require('./matrixElementsSum');

it('Для задачи matrixElementsSum при входной матрице [[0, 1, 1, 2], ' +
   '[0, 5, 0, 0], [2, 0, 3, 3]] ответ должен быть 9', () => {
	
	assert.equal(exc66.f([[0, 1, 1, 2],[0, 5, 0, 0],[2, 0, 3, 3]]), 9);
	   
});


const exc67 = require('./maxMultiple');

it('Для задачи maxMultiple при входных данных divisor = 3 и bound = 10' +
	' ответ должен быть 9', () => {
	
	assert.equal(exc67.f(3, 10), 9);
		
});

const exc68 = require('./missingLetters');

it('Для задачи missingLetters при входной строке "abce" ответ "d"', () => {
	assert.equal(exc68.f("abce"), 'd');
});
it('Для задачи missingLetters при входной строке "abcdefghjklmno" ответ "i"', () => {
	assert.equal(exc68.f("abcdefghjklmno"), 'i');
});
it('Для задачи missingLetters при входной строке "abcdefghijklmnopqrstuvwxyz" ответ undefined', () => {
	assert.equal(exc68.f("abcdefghijklmnopqrstuvwxyz"), undefined);
});


const exc69 = require('./mostFrequentDigitSum');

it('Для задачи mostFrequentDigitSum при n = 88 ответ должен быть 9', () => {
	assert.equal(exc69.f(88), 9);
});
it('Для задачи mostFrequentDigitSum при n = 8 ответ должен быть 8', () => {
	assert.equal(exc69.f(8), 8);
});
it('Для задачи mostFrequentDigitSum при n = 1 ответ должен быть 1', () => {
	assert.equal(exc69.f(1), 1);
});


const exc70 = require('./pagesNumberingWithInk');

it('Для задачи pagesNumberingWithInk при current = 1 и ' +
	'numberOfDigits = 5 ответ должен быть 5', () => {
	assert.equal(exc70.f(1, 5), 5);	
});
it('Для задачи pagesNumberingWithInk при current = 21 и ' +
	'numberOfDigits = 5 ответ должен быть 22', () => {
	assert.equal(exc70.f(21, 5), 22);	
});
it('Для задачи pagesNumberingWithInk при current = 8 и ' +
	'numberOfDigits = 4 ответ должен быть 10', () => {
	assert.equal(exc70.f(8, 4), 10);	
});


const exc71 = require('./palindromeRearranging');

it('Для задачи palindromeRearranging при входной строке "aabb" ответ' +
	' true', () => {
	assert.equal(exc71.f("aabb"), true);
});
it('Для задачи palindromeRearranging при входной строке "aaabb" ответ' +
	' true', () => {
	assert.equal(exc71.f("aaabb"), true);
});
it('Для задачи palindromeRearranging при входной строке "amdm" ответ' +
	' false', () => {
	assert.equal(exc71.f("amdm"), false);
});
it('Для задачи palindromeRearranging при входной строке "amdam" ответ' +
	' true', () => {
	assert.equal(exc71.f("amdam"), true);
});


const exc72 = require('./pigLatin');

it('Для задачи pigLatin при входной строке "glove" ответ должен быть ' +
	'"oveglay"', () => {
	assert.equal(exc72.f("glove"), "oveglay");
}); 
it('Для задачи pigLatin при входной строке "eight" ответ должен быть ' +
	'"eightway"', () => {
	assert.equal(exc72.f("eight"), "eightway");
}); 
it('Для задачи pigLatin при входной строке "velvet" ответ должен быть ' +
	'"elvetvay"', () => {
	assert.equal(exc72.f("velvet"), "elvetvay");
}); 


const exc73 = require('./proCategorization');

it('Для задачи proCategorization при входных данных ' + 
	'pros = ["Jack", "Leon", "Maria"] и ' +
	'preferences = [["Computer repair", "Handyman", "House cleaning"],' +
	'["Computer lessons", "Computer repair", "Data recovery service"],' + 
	'["Computer lessons", "House cleaning"]] ответ должен быть ' + 
	'[[["Computer lessons"], ["Leon", "Maria"]], [["Computer repair"], ' +
	'["Jack", "Leon"]], [["Data recovery service"], ["Leon"]], ' +
	'[["Handyman"], ["Jack"]], [["House cleaning"], ["Jack", "Maria"]]]', () => {
	
	const answer73 = [[["Computer lessons"], ["Leon", "Maria"]], 
	[["Computer repair"], ["Jack", "Leon"]], 
	[["Data recovery service"], ["Leon"]], [["Handyman"], ["Jack"]], 
	[["House cleaning"], ["Jack", "Maria"]]];
	const pros = ["Jack", "Leon", "Maria"]
	const preferences = [["Computer repair", "Handyman", "House cleaning"],
	["Computer lessons", "Computer repair", "Data recovery service"],
	["Computer lessons", "House cleaning"]];
	
	assert.deepEqual(exc73.f(pros, preferences), answer73);
	
});

const exc74 = require('./properNounCorrection');

it('Для задачи properNounCorrection при входной строке "pARiS" ' + 
	'ответ должен быть "Paris"', () => {
	
	assert.equal(exc74.f('pARiS'),"Paris");
		
});
it('Для задачи properNounCorrection при входной строке "John" ' + 
	'ответ должен быть "John"', () => {
	
	assert.equal(exc74.f('John'),"John");
		
});


const exc75 = require('./ratingThreshold');

it('Для задачи ratingThreshold при входных данных threshold = 3.5 и' +
	' ratings = [[3, 4], [3, 3, 3, 4], [4]]  ответ должен быть [1]', () => {
		
	assert.deepEqual(exc75.f(3.5, [[3, 4], [3, 3, 3, 4], [4]]), [1]);

});

const exc76 = require('./reflectString');

it('Для задачи reflectString при входной строке "name" ответ должен ' +
	'быть "mznv"', () => {
		
	assert.equal(exc76.f("name"), "mznv");
		
});


const exc77 = require('./reverseAString');

it('Для задачи reverseAString при входной строке "hello" ответ ' +
	'должен быть "olleh"', () => {
	
	assert.equal(exc77.f('hello'), 'olleh');
	
});
it('Для задачи reverseAString при входной строке "Howdy" ответ ' +
	'должен быть "ydwoH"', () => {
	
	assert.equal(exc77.f('Howdy'), 'ydwoH');
	
});

const exc78 = require('./seatsInTheater');

it('Для задачи seatsInTheater при входных аргументах nCols = 16, ' +
	'nRows = 11, col = 5 и row = 3 ответ должен быть 96', () => {
		
	assert.equal(exc78.f(16,11,5,3), 96);	
		
});

const exc79 = require('./seekAndDestroy');

it('Для задачи seekAndDestroy при входных аргументах [3, 5, 1, 2, 2] и' +
	' [2, 3, 5] ответ должен быть [1]', () => {
	assert.deepEqual(exc79.f([3, 5, 1, 2, 2], [2, 3, 5]), [1]);
});

it('Для задачи seekAndDestroy при входных аргументах [1, 2, 3, 5, 1, 2, 3] и' +
	' [2, 3] ответ должен быть [1]', () => {
	assert.deepEqual(exc79.f([1, 2, 3, 5, 1, 2, 3], [2, 3]), [1, 5, 1]);
});

const exc80 = require('./shapeArea');

it('Для задачи shapeArea при входном аргументе 1 ответ 1', () => {
	
	assert.equal(exc80.f(1), 1);
	
});
it('Для задачи shapeArea при входном аргументе 2 ответ 5', () => {
	
	assert.equal(exc80.f(2), 5);
	
});
it('Для задачи shapeArea при входном аргументе 3 ответ 11', () => {
	
	assert.equal(exc80.f(3), 13);
	
});


const exc81 = require('./sortByHeight');

it('Для задачи sortByHeight при входном массиве [-1, 150, 190, 170, -1, -1, 160, 180]' +
	' ответ будет [-1, 150, 160, 170, -1, -1, 180, 190]', () => {
		
	assert.deepEqual(exc81.f([-1, 150, 190, 170, -1, -1, 160, 180]),[-1, 150, 160, 170, -1, -1, 180, 190]);

});


const exc82 = require('./sortByLength');

it('Для задачи sortByLength при входном массиве ["abc", "", "aaa", "a", "zz"]' +
	' ответ должен быть ["", "a", "zz", "abc", "aaa"]', () => {
	assert.deepEqual(exc82.f(["abc", "", "aaa", "a", "zz"]), ["", "a", "zz", "abc", "aaa"]);
});


const exc83 = require('./squareDigitsSequence');

it('Для задачи squareDigitsSequence при входном аргументе 16 ответ 9', () => {
	assert.equal(exc83.f(16), 9);
});
it('Для задачи squareDigitsSequence при входном аргументе 103 ответ 4', () => {
	assert.equal(exc83.f(103), 4);
});

const exc84 = require('./stolenLunch');

it('Для задачи stolenLunch при входной строке "you\'ll n4v4r 6u4ss 8t: cdja"' +
	' ответ должен быть "you\'ll never guess it: 2390"', () => {
	
	assert.equal(exc84.f("you'll n4v4r 6u4ss 8t: cdja"), "you'll never guess it: 2390");
		
});

const exc85 = require('./stringsConstruction');

it('Для задачи stringsConstruction при входных данных a = "abc" ' + 
	'и b = "abccba" ответ должен быть 2', () => {
	
	assert.equal(exc85.f('abc', "abccba"), 2);
		
});
it('Для задачи stringsConstruction при входных данных a = "abc" ' + 
	'и b = "abcba" ответ должен быть 2', () => {
	
	assert.equal(exc85.f('abc', "abcba"), 1);
		
});
it('Для задачи stringsConstruction при входных данных a = "abcd" ' + 
	'и b = "abccba" ответ должен быть 0', () => {
	
	assert.equal(exc85.f('abcd', "abccba"), 0);
		
});


const exc86 = require('./sumAllPrimes');

it('Для задачи sumAllPrimes для числа 10 ответ 17', () => {
	assert.equal(exc86.f(10), 17);
});
it('Для задачи sumAllPrimes для числа 977 ответ 73156', () => {
	assert.equal(exc86.f(977), 73156);
});


const exc87 = require('./sumOddFibonacciNums');

it('Для задачи sumOddFibonacciNums при входном аргументе 10 ответ 10', () => {
	assert.equal(exc87.f(10), 10);
});
it('Для задачи sumOddFibonacciNums при входном аргументе 1000 ответ 1785', () => {
	assert.equal(exc87.f(1000), 1785);
});
it('Для задачи sumOddFibonacciNums при входном аргументе 4000000 ответ 4613732', () => {
	assert.equal(exc87.f(4000000), 4613732);
});


const exc88 = require('./sumOfTwo');

it('Для задачи sumOfTwo при входных параметрах a = [1, 2, 3], ' +
	'b = [10, 20, 30, 40] и v = 42 ответ должен быть true', () => {

	assert.equal(exc88.f([1, 2, 3], [10, 20, 30, 40], 42), true);
	
});
it('Для задачи sumOfTwo при входных параметрах a = [1, 2, 3], ' +
	'b = [10, 20, 30] и v = 42 ответ должен быть false', () => {

	assert.equal(exc88.f([1, 2, 3], [10, 20, 30], 42), false);
	
});


const exc89 = require('./switchLights');

it('Для задачи switchLights при входном массиве [1, 1, 1, 1, 1] ' +
	' ответ должен быть [0, 1, 0, 1, 0]', () => {
	
	assert.deepEqual(exc89.f([1, 1, 1, 1, 1]), [0, 1, 0, 1, 0]);
		
});
it('Для задачи switchLights при входном массиве [0,0] ' +
	' ответ должен быть [0,0]', () => {
	
	assert.deepEqual(exc89.f([0,0]), [0,0]);
		
});

const exc90 = require('./tasksType');

it('Для задачи tasksType при входных аргументах ' +
	'deadlines = [1, 2, 3, 4, 5] и day = 2 ответ должен быть ' +
	'[2, 3, 0]', () => {
		
	assert.deepEqual(exc90.f([1, 2, 3, 4, 5], 2), [2, 3, 0]);
		
});
it('Для задачи tasksType при входных аргументах ' +
	'deadlines = [1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8] и day = 1 ' +
	'ответ должен быть [2, 3, 0]', () => {
		
	assert.deepEqual(exc90.f( [1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 
		1), [2, 8, 2]);
		
});


const exc91 = require('./uniqueDigitProducts');

it('Для задачи uniqueDigitProducts при входном массиве ' +
	'[2, 8, 121, 42, 222, 23] ответ должен быть 3', () => {

	assert.equal(exc91.f([2, 8, 121, 42, 222, 23]), 3);
	
});

const exc92 = require('./validTime');

it('Для задачи validTime при входном аргументе time = "13:58" ' +
	'ответ должен быть true', () => {
	assert.equal(exc92.f("13:58"), true);	
});
it('Для задачи validTime при входном аргументе time = "25:51" ' +
	'ответ должен быть false', () => {
	assert.equal(exc92.f("25:51"), false);	
});
it('Для задачи validTime при входном аргументе time = "02:76" ' +
	'ответ должен быть false', () => {
	assert.equal(exc92.f("02:76"), false);	
});


const exc93 = require('./circleOfNumbers');

it('Для задачи circleOfNumbers при входных параметрах n = 10 и ' +
	'firstNumber = 2 ответ должен быть 7', () => {
	
	assert.equal(exc93.f(10, 2), 7);

});
it('Для задачи circleOfNumbers при входных параметрах n = 4 и ' +
	'firstNumber = 2 ответ должен быть 3', () => {
	
	assert.equal(exc93.f(4, 2), 0);

});

const exc94 = require('./crossingSum'); 

it('Для задачи crossingSum при входных аргументах ' +
	'matrix = [[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]], ' +
	'a = 1 и b = 3 ответ должен быть 12', () => {
	
	assert.equal(exc94.f([[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]],
		1, 3), 12);
		
});

const exc95 = require('./fermactor');

it('Для задачи fermactor при входном числе 15 ответ [4, 1]', () => {
	assert.deepEqual(exc95.f(15), [4, 1]);
});
it('Для задачи fermactor при входном числе 10873 ответ [107, 24]', () => {
	assert.deepEqual(exc95.f(10873), [107, 24]);
});
it('Для задачи fermactor при входном числе 89755 ответ [382, 237]', () => {
	assert.deepEqual(exc95.f(89755), [382, 237]);
});


const exc96 = require('./launchSequenceChecker');

it('Для задачи launchSequenceChecker при входных аргументах ' +
	'systemNames = ["stage_1", "stage_2", "dragon", "stage_1", "stage_2",' +
	'"dragon"] и stepNumbers = [1, 10, 11, 2, 12, 111] ответ должен быть true', () => {
	
	assert.equal(exc96.f(["stage_1", "stage_2", "dragon", "stage_1", "stage_2", 
	"dragon"], [1, 10, 11, 2, 12, 111]), true);
});
it('Для задачи launchSequenceChecker при входных аргументах ' +
	'systemNames = ["stage_1", "stage_1", "stage_2", "dragon"]' +
	' и stepNumbers = [2, 1, 12, 111] ответ должен быть false', () => {
	
	assert.equal(exc96.f(["stage_1", "stage_1", "stage_2", "dragon"], 
		[2, 1, 12, 111]), false);
});


const exc97 = require('./mineSweeper');

it('Для задачи mineSweeper при входной матрице ' +
	'matrix = [[true, false, false], [false, true, false], ' +
	'[false, false, false]] ответ должен быть ' +
	'[[1, 2, 1], [2, 1, 1], [1, 1, 1]]', () => {
		
	assert.deepEqual(exc97.f([[true, false, false],
         [false, true, false],
         [false, false, false]]), [[1, 2, 1], [2, 1, 1], [1, 1, 1]]);
		
});


const exc98 = require('./newNumeralSystem');

it('Для задачи newNumeralSystem при входном аргументе number = "G"' +
	' ответ должен быть ["A + G", "B + F", "C + E", "D + D"]', () => {
	
	assert.deepEqual(exc98.f('G'), ["A + G", "B + F", "C + E", "D + D"]);
		
});

const exc99 = require('./boxBlur');

it('Для задачи boxBlur при входной матрице [[1, 1, 1], [1, 7, 1], [1, 1, 1]] ' +
	' ответ должен быть [[1]]', () => {
	
	assert.deepEqual(exc99.f([[1, 1, 1], [1, 7, 1], [1, 1, 1]]), [[1]]);
	
});
it('Для задачи boxBlur при входной матрице [0,18,9], [27,9,0], [81,63,45]] ' +
	' ответ должен быть [[28]]', () => {
	
	assert.deepEqual(exc99.f([[0,18,9], [27,9,0], [81,63,45]]), [[28]]);
	
});
it('Для задачи boxBlur при входной матрице [[7,4,0,1],[5,6,2,2],[6,10,7,8],' +
	'[1,4,2,0]] ответ должен быть [[5,4], [4,4]]', () => {
	const blurImg = [[5,4], [4,4]];
	const img = [[7,4,0,1], [5,6,2,2], [6,10,7,8], [1,4,2,0]];
	assert.deepEqual(exc99.f(img), blurImg);
	
});

const exc100 = require('./electionWinners');
//Тестировал решение на codewars: Simple Fun #41: Elections Winners

it('Для задачи electionWinners при входных параметрах ' +
	'votes = [2, 3, 5, 2] и k = 3 ответ 2', () => {

	assert.equal(exc100.f([2, 3, 5, 2], 3), 2);

});


const exc101 = require('./houseOfCats');

it('Для задачи houseOfCats при legs = 6 ответ [1,3]', () => {
	assert.deepEqual(exc101.f(6), [1, 3]);
});


const exc102 = require('./minimalNumberOfCoins');

it('Для задачи minimalNumberOfCoins при входных параметрах ' +
	'coins = [1, 2, 10] и price = 28 ответ должен быть равен 6', () => {

	assert.equal(exc102.f([1, 2, 10], 28), 6);
	
});
it('Для задачи minimalNumberOfCoins при входных параметрах ' +
	'coins = [1, 2] и price = 28 ответ должен быть равен 14', () => {

	assert.equal(exc102.f([1, 2], 28), 14);
	
});
it('Для задачи minimalNumberOfCoins при входных параметрах ' +
	'coins = [1, 2, 10] и price = 27 ответ должен быть равен 6', () => {

	assert.equal(exc102.f([1, 2, 10], 27), 6);
	
});
