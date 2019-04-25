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
