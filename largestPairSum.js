//count Largest Pair Sum of consecutive digits --- Total Element = 15
//  pair number = 4
// output - 8

// condition 
//  pair number > element array --- throw error
// Run loop formula = total array elemet - pair number + 1
//        12 =    15 - 4 + 1
// Linear O(n)


function largestPairSum(array, pairNumber) {
    if (pairNumber > array.length) {
        throw new Error("Pair Number is grater the array");
    } else {
        let max = 0;
        var sortArray = arrangerOrder(array);
        console.log(sortArray);

        for (let i = 0; i < sortArray.length - pairNumber + 1; i++) {
            let temp = 0;
            for (let j = 0; j < pairNumber; j++) {
                temp += sortArray[i + j];
                // console.log('i-' + i + "-j-" + j + "-temp=" + temp);
                // console.log(temp, sortArray[j]);
            }
            if (temp > max) {
                max = temp;
            }
        }
        return max;
    }
}

function arrangerOrder(array) {
    array.sort((a, b) => {
        return a - b;
    });
    return array;
}

console.log(largestPairSum([1, 6, 7, 1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 8, 9], 5));
