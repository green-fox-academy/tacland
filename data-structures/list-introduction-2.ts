let ListA  = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee']

let ListB: string [] = [];

for(let i = 0; i < ListA.length; i++) {
    ListB = ListB.concat(ListA[i])
}

if(ListA.indexOf('Durian') > -1){
    console.log('ListA contains Durian')
} else {
    console.log('ListA doens\'t contain Durian')
}

ListB = ListB.slice(0, ListB.indexOf('Durian')).concat(ListB.slice(ListB.indexOf('Durian') + 1))

ListA.splice(4, 0, 'Kiwifruit')

console.log('ListA has ' + ListA.length + ' elements in it, while ListB has ' + ListB.length + ' elements.')

console.log('the index of Avocado is: ' + ListA.indexOf('Avocado'))
console.log('the index of Durian is: ' + ListB.indexOf('Durian'))

ListB.push('Passion Fruit', 'Pomelo')

console.log(ListA[2])