// sorting using recursion function
// [2,3,1,4] -> Case

let myArray = [2, 3, 22, 1, 4];
let i = 0, j = 1;
let finalArray = [];

function isSort(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}

function sortArrayCheck(array) {
    if (isSort(array)) {
        finalArray = array;
        return;
    } else if (array[i] < array[j]) {
        i++;
        j++;
        sortArrayCheck(array);
    } else {
        [array[j], array[i]] = [array[i], array[j]];
        i = 0;
        j = 1;
        sortArrayCheck(array);
    }
}

sortArrayCheck(myArray);
console.log(finalArray);