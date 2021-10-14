// sum is zero pair
// [-5, 4, -4, 0, -3, 1, 3, 6]
// quadratic time complexity - O(n^2)
// Linear time complexity - O(n)- Very good

function sumIsZeroPair(array) {
    sortArray = arrangerOrder(array);
    console.log(sortArray);

    left = 0;
    right = sortArray.length - 1;
    while (left < right) {
        sum = sortArray[left] + sortArray[right];
        if (sum === 0) {
            return [sortArray[left], sortArray[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
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
