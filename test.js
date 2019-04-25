const assert = require('assert');

const absoluteValuesSumMinimization = require('./absoluteValuesSumMinimization.js');

it('Проверяем функцию absoluteValuesSumMinimization', () => {
  it('Для массива [2, 4, 7] должна вернуть 4', () => {
    assert.equal(absoluteValuesSumMinimization([2, 4, 7]), 4);
  });
  it('Для массива [2, 4, 6, 7] должна вернуть 4', () => {
    assert.equal(absoluteValuesSumMinimization([2, 4, 6, 7]), 4);
  });
  it('Для массива [[2, 4, 6, 6, 7]должна вернуть 6', () => {
    assert.equal(absoluteValuesSumMinimization([2, 4, 6, 6, 7]), 6);
  });
  it('Для массива [2, 4, 6, 6, 7, 8] должна вернуть 6', () => {
    assert.equal(absoluteValuesSumMinimization([2, 4, 6, 6, 7, 8]), 6);
  });
  
}); 

const exc2 = require('./add');

it('Проверяем решение задачи add',  () => {
	it('Для чисел 1 и 2 ответ 3', () => {
		assert.equal(exc2.add(1, 2), 3);
	});
	
	it('Для чисел 1, 2, 6, 8, 10', () => {
		assert.equal(exc2.add(1, 2, 6, 8, 10), 27);
	});
	
});

const exc3 = require('./addBorder');

it('Проверяем решение задачи addBorder',  () => {
	it('Для ["abc","ded"] ответ ["*****","*abc*","*ded*","*****"]', () => {
		assert.deepEqual(exc3.addBorder(["abc","ded"]), ["*****","*abc*","*ded*","*****"]);
	});
	
});

const exc4 = require('./addTwoDigits');

it('Проверяем решение задачи addTwoDigits',  () => {
	it('Для 29 ответ 11', () => {
		assert.equal(exc4.addTwoDigits(29), 11);
	});
	
	it('Для 34 ответ 7', () => {
		assert.equal(exc4.addTwoDigits(34), 7);
	});
	
	it('Для 99 ответ 18', () => {
		assert.equal(exc4.addTwoDigits(99), 18);
	});
	
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


it('Проверяем решение задачи allLongestStrings', () => {
	it('Для массива ["aba", "aa", "ad", "vcd", "aba"] ответ ' +
		'["aba", "vcd", "aba"]', () => {
		assert.deepEqual(exc6.allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]),
			["aba", "vcd", "aba"]);
	});
	
	it('Для массива ["a", "b", "c"] ответ ["a", "b", "c"]', () => {
		assert.deepEqual(exc6.allLongestStrings(["a", "b", "c"]), 
			["a", "b", "c"]);
	});
	
});


const exc7 = require('./almostIncreasingSequence');


it('Проверяем решение задачи almostIncreasingSequence',  () => {
	it('Для последовательности [1, 3, 2, 1] ответ false', () => {
		assert.equal(exc7.f([1, 3, 2, 1]), false);
	});
	
	it('Для последовательности [1, 3, 2] ответ true', () => {
		assert.equal(exc7.f([1, 3, 2]), true);
	});
	
	it('Для последовательност [5, 1, 2, 3] ответ true', () => {
		assert.equal(exc7.f([5, 1, 2, 3]), true);
	});
	
	it('Для последовательност [3, 7, 8, 1] ответ true', () => {
		assert.equal(exc7.f([3, 7, 8, 1]), true);
	});
	
	it('Для последовательност [3, 2, 8, 1] ответ false', () => {
		assert.equal(exc7.f([3, 2, 8, 1]), false);
	});
	
});
