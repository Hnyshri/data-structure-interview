// Helper Recursive function
// [1,2,3,4,5,6,7,8,9,10]
// [1,3,5,7,9] - output - find odd numbers


function oddNumerFind(array) {
    let oddArray = [];
    function helperFunction(inputArray) {
        // console.log(inputArray);
        if (inputArray.length === 0) {
            return;
        }
        if (inputArray[0] % 2 !== 0) {
            oddArray.push(inputArray[0]);
        }
        helperFunction(inputArray.slice(1));
    }
    helperFunction(array);
    return oddArray;
}

console.log(oddNumerFind([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log("=============================================")

let name = [4,5,23,532,43];
console.log(name.indexOf(43)); //  it gave the index value
console.log(name.includes(4)); // return true
console.log(name.includes(9));  // return false

