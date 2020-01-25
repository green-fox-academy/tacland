import {Fibonacci} from './Fibonacci'

import test from 'tape'

let fibonacci = new Fibonacci

test('test giving a high number', (t: any) => {
    
    t.equal(fibonacci.compute(20), 6765)
    t.end()
    
});