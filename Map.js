// Map - 
// The Map object holds key-value pairs and remembers the original insertion order of the keys.


const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// expected output: 1

map1.set('a', 97);  // override the value of that key

console.log(map1.get('a'));
// expected output: 97

console.log(map1.size);
// expected output: 3
map1.delete('b');

console.log(map1.size);
// expected output: 2


// =================================

const myMap = new Map()
myMap.set(0, 'zero')
myMap.set(1, 'one')

for (const [key, value] of myMap) {
    console.log(key + ' = ' + value)
}
// 0 = zero
// 1 = one

for (const key of myMap.keys()) {
    console.log(key)
}
// 0
// 1

for (const value of myMap.values()) {
    console.log(value)
}
// zero
// one

for (const [key, value] of myMap.entries()) {
    console.log(key + ' = ' + value)
}
// 0 = zero
// 1 = one
