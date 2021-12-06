// ES6
// Rest and Spread Operator

// Rest Operator with Array
// A function can be called with any number of arguments, no matter how it is defined.

function sum(a, b, c, ...other) {  // Pass the element is combine with the array
    console.log(arguments);  //ES5
    console.log(other); // ES6
    return a + b + c;
}
console.log(sum(2, 3, 4, 5, 6, 7));


// Spread Operator with Array
// We’ve just seen how to get an array from the list of parameters.

var names = ['a', 'b', 'c'];
function getName(name1, name2, name3) {
    console.log(name1, name2, name3);
}

// getName(names[0], names[1], names[2]);
getName(...names); // Spread Operator


// ==================================

// Rest Operator with Object
var student = {
    name: 'shri',
    age: 30,
    hobbies: ['cricket', 'singing']
}

var age = student.age;

const { name } = student; // array destructuring in ES6
const { ...rest } = student  // rest operator
console.log(name);
console.log(age);
console.log(rest);

// spread Operator with Object

var newStudent = {
    ...student,
    age: 25  // override the age using spead operator
}
console.log(newStudent)