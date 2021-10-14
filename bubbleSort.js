// Bubble Sort 
// A sorting algorithms where the largest values bubble up at the top

function bubbleSort(array) {
    for (let i = array.length; i > 0; i--) {
        console.log(i);
        let isSwapped;
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }
    return array;
}

console.log(bubbleSort([32, 2, 43, 1, 6, 7, 84, 9]));