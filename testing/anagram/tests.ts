import test from 'tape';

import {App} from './Applist'

let testClass = new App

test('does it recognise lowercase anagram', (t: any) => {

    t.equal(testClass.anagramApp('asdfghjkl','lkjhgfdsa'), true);

    t.end()
});

test('does it recognise random uppercase anagram', (t: any) => {

    t.equal(testClass.anagramApp('asdfghjkl','LkJhGfDSa'), true);

    t.end()
});

test('does it recognise non-anagram', (t: any) => {

    t.equal(testClass.anagramApp('asdfghjkl','LkEhGfDSa'), false);

    t.end()
});

test('does it return false if same letter appears multiple times', (t: any) => {

    t.equal(testClass.anagramApp('asdfghjkl','aaaaaaaaa'), false);

    t.end()
});

