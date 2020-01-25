import test from 'tape';

import {Apple} from './Apple';

test('the return value of the method should match the string apple', (t:any) => {

    let greenApple = new Apple();
    
    t.equal(greenApple.getApple(), 'apple')
    t.end();
})