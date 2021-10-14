// sum is zero pair
// [-5, 4, -4, 0, -3, 1, 3, 6]
// quadratic time complexity - O(n^2)
// Linear time complexity - O(n)- Very good

function sumIsZeroPair(array) {
    sortArray = arrangerOrder(array);
    console.log(sortArray);

    for (let number of sortArray) {
        for (let j = 1; j < sortArray.length; j++) {
            if (number + sortArray[j] === 0) {
                return [number, sortArray[j]];
            }
        }
    }
}

function arrangerOrder(order) {
    order.sort((a, b) => {
        return a - b;  // for ascending
        // return b - a; // for descenfing
    });
    return order;
}

value = sumIsZeroPair([-5, 4, -4, 0, -3, 1, 3, 6]);
console.log(value);
