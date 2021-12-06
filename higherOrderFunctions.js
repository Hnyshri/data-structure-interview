// Higher-Order Functions
// Array Method .reduce()
// Array Method .forEach()  // syncrones callback function
// Array Method .filter()
// Array Method .map()
// Array Method .sort()


//  https://javascript.info/polyfills


// ===============================================
// Array Method .forEach()  
// executes a callback function on each of the elements in an array in order.

const numbers = [28, 77, 45, 99, 27];
numbers.forEach((number, index) => (console.log(number, index)));

//===================================================================

// Array Method .filter()
// executes a callback function on each element in an array. 
//The callback function for each of the elements must return either true or false. 

const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter(n => n > 20);
console.log(filteredArray);

//===================================================================

// Array Method .map()
// function on each element in an array. It returns a new array made up of 
// the return values from the callback function.

const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];
const announcements = finalParticipants.map((member, index) => {
    return member + index + ' joined the contest.' + `${member}`;
})

console.log(announcements);

//===================================================================

// Array Method .reduce()
// The .reduce() method iterates through an array and returns a single value.

const arrayOfNumbers = [1, 2, 3, 4];
const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
    console.log(accumulator, currentValue);
    return accumulator + currentValue;
}, 2);

console.log(sum); // 10

//===================================================================

// Array Method .sort()

const sort = [4, 11, 42, 14, 39];
const sort2 = [4, 11, 42, 14, 39];

const sortArray = sort.sort((n1, n2) => n1 > n2 ? 1 : -1);
const sortMethod = sort2.sort((a, b) => b - a);

console.log(sortArray);
console.log(sortMethod);