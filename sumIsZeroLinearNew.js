//Array set
let arraySet = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
//Call function to find zero val set
console.log(checkingSumZero(arraySet));
/**
*
*
* The core logic of this function is sum of two
* value become zero only when they are opposite.
*
If current index
is positive then make it negative
if it negative then make it positive
*/
function checkingSumZero(arraySet) {
    let foundArray = [];
    let currentNumber = null;
    for (let i = 0; i < arraySet.length; i++) {
        currentNumber = arraySet[i];
        //If value is negative then make it positive vice versa
        let findNumber = currentNumber < 0 ? Math.abs(currentNumber) : -Math.abs(currentNumber);
        //Delete current index

        // console.log('findNumber' + findNumber);
        // console.log(arraySet);
        // console.log('222222222222222222222');
        // delete (arraySet[i]);
        // console.log(arraySet);

        //Check value present
        console.log(arraySet.indexOf(findNumber));
        if (arraySet.indexOf(findNumber) !== -1) {
            foundArray.push([currentNumber + ' and ' + arraySet[arraySet.indexOf(findNumber)]]);
            break;
        }
    }
    return foundArray;
}