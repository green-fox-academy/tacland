let map: {[key: number]: string} = {}

if(Object.keys(map).length > 0) {
    console.log('map is not empty')
} else {
    console.log('map is empty')
}

map [97] = 'a';
map [98] = 'b';
map [99] = 'c';
map [65] = 'A';
map [66] = 'B';
map [67] = 'C';

console.log(Object.keys(map))
console.log(Object.values(map))

map [68] = 'D'

console.log(Object.keys(map).length)

console.log(map[99])

delete map [97];

if (Object.values(map).indexOf(map[100]) > -1) {
    console.log(map[100])
} else {
    console.log('there is no such key')
}

for(let i = 65; i < 100; i++){
    delete map[i];
}

console.log(map)