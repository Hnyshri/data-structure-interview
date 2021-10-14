//count unique Number
//  i j
// [1,1,2,3,4,5,5,6,6,7,8,8] - sorted array
// output - 8

// condition 
// i = 0; j=1;
// array[i] !== array[j]
//  i++
// array[i]= array[j]

// Linear O(n)
function countUniqueNumber(array) {
    if (array.length > 0) {

        sortedArray = sortArray(array);
        // console.log(sortedArray);

        i = 0;
        for (j = 1; j < sortedArray.length; j++) {
            // console.log(sortedArray[j], j);
            if (sortedArray[i] !== sortedArray[j]) {
                i++;
                sortedArray[i] = sortedArray[j];
            }
        }
        // return sortedArray;
        return i + 1;
    } else {
        return "Array Empty";
    }
}

function sortArray(array) {
    array.sort((a, b) => {
        return a - b;
    });
    return array;
}

console.log(countUniqueNumber([1, 6, 7, 1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 8, 9]));
