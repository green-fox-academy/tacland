import test from 'tape';

import {Apple} from './Apple';

test('the return value of the method should match the string apple', (t:any) => {

    let greenApple = new Apple();
    
    t.equal(greenApple.getApple(), 'apple')
      
    t.end();

});

test('testing sum functionality with no elements, 1 element and multiple elements', (t:any) => {

    let greenApple = new Apple();
    
    let numberList1 = [1,2,3,4,5];

    t.equal(greenApple.sum(numberList1), 15);

    let numberList2 = [1];

    t.equal(greenApple.sum(numberList2), 1);

    let numberlist3 = [];

    t.equal(greenApple.sum(numberlist3), 'no numbers to sum');
    
    t.end();

});

