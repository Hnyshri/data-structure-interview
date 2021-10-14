// Time compl- quaditice 

function selectionSort(array) {
    for (i = 0; i < array.length; i++) {
        min = i;
        for (j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (i != min) {
            temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}

console.log(selectionSort([32, 2, 43, 1, 6, 7, 84, 9]));