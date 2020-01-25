import test from 'tape';
import {LetterCounter} from './LetterCounter'

let myClass = new LetterCounter()

test('does it recognise lowercase anagram', (t: any) => {

    t.deepEqual(myClass.letterCounter('askdalkjsd'),{ a: 2, s: 2, k: 2, d: 2, l: 1, j: 1 });

    t.end()

});

