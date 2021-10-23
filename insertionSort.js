// insertion Sort
// time complexity O(n^2)

// step
// 1- consider second element of array === it will start here
// 2-  array[j] > current - then swapping 

const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        let current = array[i]; // element 5
        let j = i - 1;     // index 0
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];   // temp array [5,5,9,4,11,1,2,6,8,30]
            j--;
        }
        array[j + 1] = current;       // array [20,5,9,4,11,1,2,6,8,30]
    }

    return array;
}

console.log(insertionSort([20, 5, 9, 4, 11, 1, 2, 6, 8, 30]));