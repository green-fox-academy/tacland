const list: string[] = [];

console.log(list.length)

list.push('William');

if (list.length > 0) {
    console.log('The list is not empty')
} else{
    console.log('The list is empty')
}

list.push('John');

list.push('Amanda');

console.log(list.length)

console.log(list[2])

for(let i = 0; i < list.length - 1; i++){
    console.log(list[i]);
}

for(let i = 0; i < list.length; i++){
    console.log(i+1 + '. ' + list[i]);
}

list.splice(1,1)

for(let i = list.length - 1; i > -1; i--){
    console.log(list[i]);
}

list.splice(0,2)