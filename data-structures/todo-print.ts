'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';
let myTodo = 'My todo:\n';
let download = ' - Download games\n';
let diablo = '    - Diablo';

todoText = myTodo.concat(todoText);
todoText = todoText.concat(download);
todoText = todoText.concat(diablo);


console.log(todoText);