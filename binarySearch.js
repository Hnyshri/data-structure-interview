// Divide and conquerer Technique
// Find the index of given no in a sorted array 7
//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] ==>index 6 output

// min =0; , element =1
// max = array.length-1 , element =15
//minindex = (min+max)/2; ==> (0+14)/2 =7 index, elemetnt=8

// if array[minIndex] < number
// min = minIndex +1; 
// else array[minIndex] > number
// max = minIndex-1
// else minIndex


// time complexity binary - O(log(n))

function binarySearchFindValue(array, number) {
    let min = 0;
    let max = array.length - 1;
    while (min <= max) {
        let minIndex = Math.floor((min + max) / 2);
        console.log("minIndex-" + minIndex + "-min-" + min + "-max-" + max);
        if (array[minIndex] < number) {
            min = minIndex + 1;
        } else if (array[minIndex] > number) {
            max = minIndex - 1;
        } else {
            return minIndex;
        }
    }
    return -1;
}

console.log(binarySearchFindValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7));
